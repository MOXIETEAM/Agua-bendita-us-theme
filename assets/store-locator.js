class StoreLocator {
  constructor(mapSelector, optionsSelector) {
    const domainConfig = {
      'www.aguabendita.com': { defaultCountry: 'United States', defaultLat: 40.28619760274426, defaultLng: -101.21703812144013 },
      'aguabenditamx.myshopify.com': { defaultCountry: 'México', defaultLat: 19.4326, defaultLng: -99.1332 },
      'mx.aguabendita.com': { defaultCountry: 'México', defaultLat: 19.4326, defaultLng: -99.1332 },
      'www.aguabendita.com.co': { defaultCountry: 'Colombia', defaultLat: 4.711, defaultLng: -74.0721 },
      'aguabenditaco.myshopify.com': { defaultCountry: 'Colombia', defaultLat: 4.711, defaultLng: -74.0721 }
    };

    const config = domainConfig[window.location.hostname] || { defaultCountry: 'United States', defaultLat: 40.28619760274426, defaultLng: -101.21703812144013 };

    this.$locationOptionsContainer = document.querySelector(optionsSelector);
    this.$mapContainer = document.querySelector(mapSelector);
    this.googleApiKey = 'AIzaSyCH0lT162LCbSgkMswK0FkpMJ-mmRJDLXw';
    this.lat_act = 0;
    this.lon_act = 0;
    this.activePosition = false;
    this.markers = [];
    this.a_counter = 0;
    this.infowindow = {};
    this.storesInfo = '';
    this.icon = 'https://cdn.shopify.com/s/files/1/0598/7831/0042/files/ab-location-marker-icon.png?v=1692810681';
    this.defaultCountry = config.defaultCountry;
    this.defaultLat = config.defaultLat;
    this.defaultLng = config.defaultLng;
    this.storeLanguage = document.querySelector('html').getAttribute('lang') || 'en';

    this.init();
  }

  async init() {
    await this.loadJSONFile();
    await this.loadApiGoogle();
    this.storesMapData = this.storesInfo;
    this.setupUI();
    this.getLocation();
    this.storeInMap();
  }

  async loadJSONFile() {
    const url = document.querySelector('.module.store-locator').getAttribute('data-stores-info');
    try {
      const response = await fetch(url);
      this.storesInfo = await response.json();
    } catch (e) {
      console.error('Failed to load stores info:', e);
    }
  }

  loadApiGoogle() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = () => resolve();
      script.src = `//maps.googleapis.com/maps/api/js?libraries=places&key=${this.googleApiKey}`;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  setupUI() {
    const containerCountry = document.createElement('div');
    containerCountry.id = 'container_country';

    const containerCity = document.createElement('div');
    containerCity.id = 'container_city';

    const seeAllBtn = document.createElement('button');
    seeAllBtn.className = 'see-all-locations';
    seeAllBtn.innerText = this.translations(this.storeLanguage, 'see_all');

    this.$locationOptionsContainer.appendChild(containerCountry);
    this.$locationOptionsContainer.appendChild(containerCity);
    this.$locationOptionsContainer.appendChild(seeAllBtn);

    seeAllBtn.addEventListener('click', () => {
      const countriesSelect = document.getElementById('countries');
      if (countriesSelect) {
        countriesSelect.value = 'NULL';
        countriesSelect.dispatchEvent(new Event('change'));
      }
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.showPosition(position),
        () => this.showError()
      );
    } else {
      this.showError();
    }
  }

  createMap(options) {
    return new google.maps.Map(this.$mapContainer, options);
  }

  showPosition(position) {
    this.activePosition = true;
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.lat_act = lat;
    this.lon_act = lon;
    
    this.loadList();
    
    if (this.defaultCountry) {
      const countriesSelect = document.getElementById('countries');
      if (countriesSelect) {
        const option = countriesSelect.querySelector(`option[country="${this.defaultCountry}"]`);
        if (option) {
          countriesSelect.value = option.value;
          countriesSelect.dispatchEvent(new Event('change'));
        }
      }
    }
  }

  showError() {
    if (!this.activePosition) {
      this.loadList();
      if (this.defaultCountry) {
        setTimeout(() => {
          const countriesSelect = document.getElementById('countries');
          if (countriesSelect) {
            const option = countriesSelect.querySelector(`option[country="${this.defaultCountry}"]`);
            if (option) {
              countriesSelect.value = option.value;
              countriesSelect.dispatchEvent(new Event('change'));
            }
          }
        }, 100);
      }
    }
  }

  painstStores(map, stores, callback) {
    this.markers = [];

    for (let i = 0; i < stores.length; i++) {
      const store = stores[i];
      const marker = new google.maps.Marker({
        data_complete: store,
        position: { lat: store[2], lng: store[1] },
        map: map,
        content: store[3],
        icon: this.icon,
        title: store[0]
      });
      this.markers.push(marker);
    }

    let listHTML = '<ul>';
    
    for (let i = 0; i < this.markers.length; i++) {
      const marker = this.markers[i];
      const content = marker.content;
      
      let todaysSchedule = '';
      let fullSchedule = '';
      let deliveryOptionsHTML = '';
      
      const phoneLink = content.phone ? `<a href="tel:${content.phone}">${content.phone}</a>` : '';
      const whatsappLink = content.whatsapp ? `<a href="${content.whatsapp}"><img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/whatsapp-icon.png?v=1692810271" alt="WhatsApp"></a>` : '';

      if (content.schedules) {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        let scheduleItems = '';
        
        Object.keys(content.schedules).forEach((day) => {
          if (today === day) {
            todaysSchedule = `<div class="store-info todays-schedule"><i class="icon icon-clock"></i> ${this.translations(this.storeLanguage, 'todays_schedule')}: ${content.schedules[day]}</div>`;
          }
          scheduleItems += `<dl class="schedule-item${today === day ? ' current' : ''}"><dt>${this.translations(this.storeLanguage, day)}</dt><dd>${content.schedules[day]}</dd></dl>`;
        });

        if (scheduleItems) {
          fullSchedule = `<div class="store-info full-schedule"><dl class="schedule-item current"><dt>${this.translations(this.storeLanguage, 'store_hours')}</dt></dl>${scheduleItems}</div>`;
        }
      }

      if (content.delivery_options) {
        let options = '';
        Object.keys(content.delivery_options).forEach((option) => {
          if (content.delivery_options[option]) {
            let label = '';
            if (option === 'delivery') label = this.translations(this.storeLanguage, 'delivery');
            else if (option === 'store_pickup') label = this.translations(this.storeLanguage, 'pickup');
            else if (option === 'store_shopping') label = this.translations(this.storeLanguage, 'instore');
            if (label) options += `<div class="delivery-option">${label}</div>`;
          }
        });
        if (options) {
          deliveryOptionsHTML = `<div class="store-info delivery-options"><strong class="title">${this.translations(this.storeLanguage, 'delivery_options')}</strong>${options}</div>`;
        }
      }

      listHTML += `
        <li class="single-store" store-index="${i}">
          <button class="store-more-info"><span class="visually-hidden">More Info</span><span>i</span></button>
          <h4 class="store-info store-name">${content.name}</h4>
          <div class="store-info store-address">${content.address}</div>
          <div class="store-info store-contact">
            ${phoneLink || whatsappLink ? `${this.translations(this.storeLanguage, 'contact_line')}:&nbsp;` : ''}
            ${phoneLink}
            ${whatsappLink}
          </div>
          ${todaysSchedule}
          ${fullSchedule}
          ${deliveryOptionsHTML}
          <div class="store-info store-directions">
            <a href="https://www.google.com/maps/search/?api=1&query=${content.lat}%2C${content.lng}&zoom=11" target="_blank">
              ${this.translations(this.storeLanguage, 'view_in')} Google Maps
              <img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/google-maps-icon.png?v=1692810272" style="max-width: 8px;" alt="Google Maps">
            </a>
            <a href="https://www.waze.com/live-map/directions?navigate=yes&to=ll.${content.lat}%2C${content.lng}" target="_blank">
              ${this.translations(this.storeLanguage, 'view_in')} Waze
              <img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/waze-icon-2x.png?v=1692826410" alt="Waze">
            </a>
          </div>
        </li>`;
    }

    listHTML += '</ul>';
    document.getElementById('stores-list').innerHTML = listHTML;

    if (callback) callback();
  }

  addMarker(map) {
    if (this.a_counter < this.markers.length) {
      const marker = this.markers[this.a_counter];
      
      google.maps.event.addListener(marker, 'click', () => {
        if (this.infowindow.content) this.infowindow.close();
        
        this.infowindow = new google.maps.InfoWindow({
          content: this.contentHTML(marker.content, marker.content.name)
        });
        
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        this.infowindow.open(map, marker);
        map.panTo(marker.getPosition());
      });

      this.a_counter++;
      this.addMarker(map);
    } else {
      this.a_counter = 0;
    }
  }

  contentHTML(content, title) {
    let html = `<div id="content"><div id="siteNotice"></div><h2 id="firstHeading" class="firstHeading"><strong>${title}</strong></h2><br><div id="bodyContent">`;
    
    if (content.address && content.address.trim()) {
      html += `<p><strong>${this.translations(this.storeLanguage, 'address')}: </strong>${content.address}</p>`;
    }
    if (content.phone && content.phone.trim()) {
      html += `<p><strong>${this.translations(this.storeLanguage, 'phone')}: </strong>${content.phone}</p>`;
    }
    if (content.email && content.email.trim()) {
      html += `<p><strong>${this.translations(this.storeLanguage, 'email')}: </strong>${content.email}</p>`;
    }
    
    html += `<p><a href="https://www.google.com/maps/search/?api=1&query=${content.lat}%2C${content.lng}&zoom=11" target="_blank" style="text-decoration: underline;">${this.translations(this.storeLanguage, 'get_directions')}</a></p>`;
    html += '</div></div>';
    
    return html;
  }

  loadList() {
    const countriesSelect = document.createElement('select');
    countriesSelect.id = 'countries';
    
    countriesSelect.onchange = () => {
      if (countriesSelect.value !== 'NULL') {
        const citiesSelect = document.createElement('select');
        citiesSelect.id = 'cities';
        citiesSelect.onchange = () => {
          this.detectedStoresPaint(
            this.getOption('countries').getAttribute('country'),
            this.getOption('cities').text
          );
        };
        
        document.getElementById('container_city').innerHTML = '<span class="visually-hidden">Filter by City</span>';
        document.getElementById('container_city').appendChild(citiesSelect);
        this.fullList('city');
        this.detectedStoresPaint(this.getOption('countries').getAttribute('country'), '');
      } else {
        document.getElementById('container_city').innerHTML = '';
      }
    };

    if (!document.getElementById('countries')) {
      document.getElementById('container_country').innerHTML = '<span class="visually-hidden">Filter by Country</span>';
      document.getElementById('container_country').appendChild(countriesSelect);
    }
    
    this.fullList('country');
  }

  detectedStoresPaint(country, city) {
    const data = this.storesMapData;
    let countryData = null;
    let cityData = null;
    const mapOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const stores = [];
    let useDefault = false;

    if (country && !city) {
      countryData = data[country];
      if (countryData) {
        mapOptions.center = new google.maps.LatLng(countryData.lat, countryData.lng);
        const cities = countryData.cities;
        for (const cityName in cities) {
          const cityStores = cities[cityName].stores;
          for (const storeName in cityStores) {
            const store = cityStores[storeName];
            stores.push([storeName, store.lng, store.lat, {
              name: storeName,
              lat: store.lat,
              lng: store.lng,
              phone: store.phone,
              email: store.email,
              whatsapp: store.whatsapp,
              delivery_options: store.delivery_options,
              address: store.address,
              schedules: store.schedules
            }]);
          }
        }
      } else {
        useDefault = true;
      }
    }

    if (!country && city) {
      let found = false;
      for (const countryName in data) {
        const cityInfo = data[countryName].cities[city];
        if (cityInfo) {
          found = true;
          mapOptions.zoom = 11;
          mapOptions.center = new google.maps.LatLng(cityInfo.lat, cityInfo.lng);
          const cityStores = cityInfo.stores;
          for (const storeName in cityStores) {
            const store = cityStores[storeName];
            stores.push([storeName, store.lng, store.lat, {
              name: storeName,
              lat: store.lat,
              lng: store.lng,
              phone: store.phone,
              email: store.email,
              whatsapp: store.whatsapp,
              delivery_options: store.delivery_options,
              address: store.address,
              schedules: store.schedules
            }]);
          }
        }
      }
      if (!found) useDefault = true;
    }

    if (!country && !city) {
      useDefault = true;
    }

    if (country && city) {
      countryData = data[country];
      if (countryData) {
        cityData = countryData.cities[city];
        if (cityData) {
          mapOptions.zoom = 11;
          mapOptions.center = new google.maps.LatLng(cityData.lat, cityData.lng);
          const cityStores = cityData.stores;
          for (const storeName in cityStores) {
            const store = cityStores[storeName];
            stores.push([storeName, store.lng, store.lat, {
              name: storeName,
              lat: store.lat,
              lng: store.lng,
              phone: store.phone,
              email: store.email,
              whatsapp: store.whatsapp,
              delivery_options: store.delivery_options,
              address: store.address,
              schedules: store.schedules
            }]);
          }
        } else {
          mapOptions.center = new google.maps.LatLng(countryData.lat, countryData.lng);
          const cities = countryData.cities;
          for (const cityName in cities) {
            const cityStores = cities[cityName].stores;
            for (const storeName in cityStores) {
              const store = cityStores[storeName];
              stores.push([storeName, store.lng, store.lat, {
                name: storeName,
                lat: store.lat,
                lng: store.lng,
                phone: store.phone,
                email: store.email,
                whatsapp: store.whatsapp,
                delivery_options: store.delivery_options,
                address: store.address,
                schedules: store.schedules
              }]);
            }
          }
        }
      }
    }

    if (useDefault) {
      this.loadMapDefault();
    } else {
      const map = this.createMap(mapOptions);
      this.painstStores(map, stores, () => this.addMarker(map));
    }
  }

  storeInMap() {
    document.addEventListener('click', (e) => {
      const storeItem = e.target.closest('.single-store');
      if (storeItem) {
        const index = storeItem.getAttribute('store-index');
        const marker = this.markers[index];
        
        if (marker && marker.map) {
          marker.map.setZoom(15);
          marker.map.setCenter(marker.getPosition());
          
          if (this.infowindow.content) this.infowindow.close();
          
          this.infowindow = new google.maps.InfoWindow({
            content: this.contentHTML(marker.content, marker.content.name)
          });
          
          storeItem.parentElement.querySelectorAll('.single-store').forEach(el => el.classList.remove('active'));
          storeItem.classList.toggle('active');
          
          this.infowindow.open(marker.map, marker);
        }
      }
    });
  }

  loadMapDefault() {
    const mapOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(this.defaultLat, this.defaultLng)
    };
    
    const data = this.storesMapData;
    const stores = [];

    for (const countryName in data) {
      const cities = data[countryName].cities;
      for (const cityName in cities) {
        const cityStores = cities[cityName].stores;
        for (const storeName in cityStores) {
          const store = cityStores[storeName];
          stores.push([storeName, Number(store.lng), Number(store.lat), {
            name: storeName,
            lat: store.lat,
            lng: store.lng,
            phone: store.phone,
            email: store.email,
            whatsapp: store.whatsapp,
            delivery_options: store.delivery_options,
            address: store.address,
            schedules: store.schedules
          }]);
        }
      }
    }

    const map = this.createMap(mapOptions);
    this.painstStores(map, stores, () => this.addMarker(map));
  }

  getOption(selectId) {
    const select = document.getElementById(selectId);
    return select.options[select.selectedIndex];
  }

  fullList(type) {
    if (type === 'country') {
      let options = `<option value="NULL">${this.translations(this.storeLanguage, 'select_country')}</option>`;
      for (const name in this.storesMapData) {
        const displayName = this.storeLanguage === 'es' ? name.replace('United States', 'Estados Unidos') : name;
        options += `<option country="${name}" value="${this.storesMapData[name].lat},${this.storesMapData[name].lng}">${displayName}</option>`;
      }
      document.getElementById('countries').innerHTML = options;
    } else {
      let options = `<option value="NULL">${this.translations(this.storeLanguage, 'select_city')}</option>`;
      const country = this.getOption('countries').getAttribute('country');
      for (const name in this.storesMapData) {
        if (country === name) {
          const cities = this.storesMapData[name].cities;
          for (const cityName in cities) {
            options += `<option value="${cities[cityName].lat},${cities[cityName].lng}">${cityName}</option>`;
          }
        }
      }
      document.getElementById('cities').innerHTML = options;
    }
  }

  translations(lang, key) {
    const strings = {
      en: {
        select_country: 'Select Country',
        select_city: 'Select City',
        see_all: 'See all',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        get_directions: 'Get directions',
        view_in: 'View in',
        contact_line: 'Contact line',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        todays_schedule: "Today's Hours",
        store_hours: 'Store Hours',
        delivery_options: 'Shopping & Delivery Options',
        delivery: 'Delivery',
        pickup: 'Pick-up in Store',
        instore: 'In Store Shopping'
      },
      es: {
        select_country: 'Seleccionar país',
        select_city: 'Seleccionar ciudad',
        see_all: 'Ver todo',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        get_directions: 'Link al mapa',
        view_in: 'Ver en',
        contact_line: 'Línea de Contacto',
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
        todays_schedule: 'Horario para hoy',
        store_hours: 'Horarios de la tienda',
        delivery_options: 'Opciones de entrega',
        delivery: 'Entrega',
        pickup: 'Recogida en tienda',
        instore: 'Compra en la tienda'
      }
    };
    
    return strings[lang] && strings[lang][key] ? strings[lang][key] : strings['en'][key] || '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const storeLocatorEl = document.querySelector('.module.store-locator');
  if (storeLocatorEl) {
    new StoreLocator('.map-container', '.location-options-container');
  }
});
