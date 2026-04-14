(() => {
  const DEFAULTS_BY_HOST = {
    "www.aguabendita.com": {
      defaultCountry: "United States",
      defaultLat: 40.28619760274426,
      defaultLng: -101.21703812144013
    },
    "aguabenditamx.myshopify.com": {
      defaultCountry: "M\u00e9xico",
      defaultLat: 19.4326,
      defaultLng: -99.1332
    },
    "mx.aguabendita.com": {
      defaultCountry: "M\u00e9xico",
      defaultLat: 19.4326,
      defaultLng: -99.1332
    },
    "www.aguabendita.com.co": {
      defaultCountry: "Colombia",
      defaultLat: 4.711,
      defaultLng: -74.0721
    },
    "aguabenditaco.myshopify.com": {
      defaultCountry: "Colombia",
      defaultLat: 4.711,
      defaultLng: -74.0721
    }
  };

  const DEFAULT_FALLBACK = {
    defaultCountry: "United States",
    defaultLat: 40.28619760274426,
    defaultLng: -101.21703812144013
  };

  const normalizeName = (value) => String(value || "").toUpperCase().replace(/\s+/g, "");

  class StoreLocator {
    constructor(section) {
      this.section = section;
      this.mapContainer = section.querySelector(".map-container");
      this.locationOptionsContainer = section.querySelector(".location-options-container");
      this.storesList = section.querySelector("#stores-list");
      this.googleApiKey = "AIzaSyCH0lT162LCbSgkMswK0FkpMJ-mmRJDLXw";
      this.icon = "https://cdn.shopify.com/s/files/1/0598/7831/0042/files/ab-location-marker-icon.png?v=1692810681";
      this.activePosition = false;
      this.markers = [];
      this.infoWindow = null;
      this.storesInfo = null;
      this.storesMapData = null;
      this.storeLanguage = (document.documentElement.getAttribute("lang") || "en").split("-")[0];
      this.initialLoad = true;

      const defaults = DEFAULTS_BY_HOST[window.location.hostname] || DEFAULT_FALLBACK;
      this.defaultCountry = defaults.defaultCountry;
      this.defaultLat = defaults.defaultLat;
      this.defaultLng = defaults.defaultLng;
    }

    init() {
      if (!this.mapContainer || !this.locationOptionsContainer) {
        return;
      }

      const storesInfoUrl = this.section.getAttribute("data-stores-info");
      if (!storesInfoUrl) {
        return;
      }

      this.loadJSONFile(storesInfoUrl)
        .then(() => this.loadApiGoogle())
        .then(() => {
          this.storesMapData = this.storesInfo || {};
          this.buildFilters();
          this.getLocation();
          this.storeInMap();
        })
        .catch(() => {});
    }

    loadJSONFile(url) {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.storesInfo = data;
        });
    }

    loadApiGoogle() {
      if (window.google && window.google.maps) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector("script[data-store-locator-google]");
        if (existingScript) {
          existingScript.addEventListener("load", resolve);
          existingScript.addEventListener("error", reject);
          return;
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.dataset.storeLocatorGoogle = "true";
        script.onload = resolve;
        script.onerror = reject;
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${this.googleApiKey}`;
        document.head.appendChild(script);
      });
    }

    buildFilters() {
      if (this.locationOptionsContainer.querySelector("#container_country")) {
        return;
      }

      const countryContainer = document.createElement("div");
      countryContainer.id = "container_country";

      const cityContainer = document.createElement("div");
      cityContainer.id = "container_city";

      const seeAllButton = document.createElement("button");
      seeAllButton.type = "button";
      seeAllButton.className = "see-all-locations";
      seeAllButton.innerText = this.translations(this.storeLanguage, "see_all") || "See all";

      this.locationOptionsContainer.appendChild(countryContainer);
      this.locationOptionsContainer.appendChild(cityContainer);
      this.locationOptionsContainer.appendChild(seeAllButton);

      seeAllButton.addEventListener("click", () => {
        const countriesSelect = this.section.querySelector("#countries");
        if (!countriesSelect) {
          return;
        }
        countriesSelect.value = "NULL";
        countriesSelect.dispatchEvent(new Event("change"));
        const citiesSelect = this.section.querySelector("#cities");
        if (citiesSelect) {
          citiesSelect.value = "NULL";
        }
        this.detectedStoresPaint("", "");
      });
    }

    getLocation() {
      if (!navigator.geolocation) {
        this.showError();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => this.showPosition(position),
        () => this.showError()
      );
    }

    showPosition(position) {
      this.activePosition = true;
      this.lat_act = position.coords.latitude;
      this.lon_act = position.coords.longitude;

      if (this.shouldUseDefaultCountry()) {
        this.loadList();
        this.applyDefaultCountry();
        this.initialLoad = false;
        return;
      }

      const latlon = new google.maps.LatLng(this.lat_act, this.lon_act);

      this.validateCountry((stores) => {
        const mapOptions = {
          center: latlon,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          }
        };

        const map = this.createMap(mapOptions);
        new google.maps.Marker({
          position: latlon,
          map,
          title: "Store Locator Marker",
          animation: google.maps.Animation.DROP
        });

        this.paintStores(map, stores, () => this.addMarker(map));
      });

      this.loadList();
      this.applyDefaultCountry();
      this.initialLoad = false;
    }

    showError() {
      if (this.activePosition) {
        return;
      }

      this.loadList();
      const countryParam = this.getURLParam("pais");
      const storesParam = this.getURLParam("tiendas");
      if (!countryParam && !storesParam) {
        this.applyDefaultCountry();
        this.initialLoad = false;
      }
    }

    applyDefaultCountry() {
      if (!this.defaultCountry) {
        return;
      }

      const countriesSelect = this.section.querySelector("#countries");
      if (!countriesSelect) {
        return;
      }

      const defaultOption = this.section.querySelector(
        `#countries option[country="${this.defaultCountry}"]`
      );
      if (!defaultOption) {
        return;
      }

      countriesSelect.value = defaultOption.value;
      countriesSelect.dispatchEvent(new Event("change"));

      if (this.storesMapData && this.storesMapData[this.defaultCountry]) {
        this.detectedStoresPaint(this.defaultCountry, "");
      }
    }

    shouldUseDefaultCountry() {
      const countryParam = this.getURLParam("pais");
      const storesParam = this.getURLParam("tiendas");
      return (
        this.initialLoad &&
        !countryParam &&
        !storesParam &&
        this.defaultCountry &&
        this.storesMapData &&
        this.storesMapData[this.defaultCountry]
      );
    }

    createMap(options) {
      return new google.maps.Map(this.mapContainer, options);
    }

    validateCountry(callback) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?libraries=places&key=${this.googleApiKey}&latlng=${this.lat_act},${this.lon_act}&sensor=false`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results || [];
          if (!results.length) {
            this.loadMapDefault();
            return;
          }

          const countryResult = results[results.length - 1];
          const countryName = normalizeName(countryResult.formatted_address);
          const countries = this.storesMapData || {};
          const match = Object.keys(countries).find(
            (name) => normalizeName(name) === countryName
          );

          if (match) {
            this.validateCities(countries[match], results, callback);
            return;
          }

          this.loadMapDefault();
        })
        .catch(() => {
          this.loadMapDefault();
        });
    }

    validateCities(countryData, results, callback) {
      const cities = (countryData && countryData.cities) || {};
      const formattedAddress = results[0] && results[0].formatted_address
        ? results[0].formatted_address
        : "";
      const normalizedAddress = normalizeName(formattedAddress);

      const matchedCity = Object.keys(cities).find((name) =>
        normalizedAddress.includes(normalizeName(name))
      );

      if (matchedCity) {
        this.createStoresMap(cities[matchedCity].stores, callback);
        return;
      }

      this.createStoresMap(countryData, callback);
    }

    createStoresMap(data, callback) {
      const stores = this.normalizeStores(data);
      if (data && data.cities) {
        this.loadList();
      }
      if (typeof callback === "function") {
        callback(stores);
      }
    }

    normalizeStores(data) {
      const stores = [];
      const pushStore = (name, storeData) => {
        if (!storeData) {
          return;
        }
        stores.push([
          name,
          Number(storeData.lng),
          Number(storeData.lat),
          {
            name,
            lat: storeData.lat,
            lng: storeData.lng,
            phone: storeData.phone,
            email: storeData.email,
            whatsapp: storeData.whatsapp,
            delivery_options: storeData.delivery_options,
            address: storeData.address,
            schedules: storeData.schedules
          }
        ]);
      };

      if (data && data.cities) {
        Object.keys(data.cities).forEach((cityName) => {
          const city = data.cities[cityName];
          const cityStores = (city && city.stores) || {};
          Object.keys(cityStores).forEach((storeName) => {
            pushStore(storeName, cityStores[storeName]);
          });
        });
        return stores;
      }

      if (!data) {
        return stores;
      }

      Object.keys(data).forEach((storeName) => {
        pushStore(storeName, data[storeName]);
      });

      return stores;
    }

    loadList() {
      if (!this.storesMapData) {
        return;
      }

      let countriesSelect = this.section.querySelector("#countries");
      if (!countriesSelect) {
        countriesSelect = document.createElement("select");
        countriesSelect.id = "countries";
        countriesSelect.addEventListener("change", () => {
          if (countriesSelect.value !== "NULL") {
            let citiesSelect = this.section.querySelector("#cities");
            if (!citiesSelect) {
              citiesSelect = document.createElement("select");
              citiesSelect.id = "cities";
              citiesSelect.addEventListener("change", () => {
                const countryOption = this.getOption("countries");
                const cityOption = this.getOption("cities");
                if (!countryOption || !cityOption) {
                  return;
                }
                this.detectedStoresPaint(
                  countryOption.getAttribute("country"),
                  cityOption.text
                );
              });
            }

            const cityContainer = this.section.querySelector("#container_city");
            if (cityContainer) {
              cityContainer.innerHTML = '<span class="hdt-visually-hidden">Filter by City</span>';
              cityContainer.appendChild(citiesSelect);
            }

            this.fullList("city");
            const countryOption = this.getOption("countries");
            if (countryOption) {
              this.detectedStoresPaint(countryOption.getAttribute("country"), "");
            }
          } else {
            let citiesSelect = this.section.querySelector("#cities");
            if (!citiesSelect) {
              citiesSelect = document.createElement("select");
              citiesSelect.id = "cities";
            }
            const cityContainer = this.section.querySelector("#container_city");
            if (cityContainer) {
              cityContainer.innerHTML = '<span class="hdt-visually-hidden">Filter by City</span>';
              cityContainer.appendChild(citiesSelect);
            }
            citiesSelect.value = "NULL";
            this.fullList("city");
            this.detectedStoresPaint("", "");
          }
        });
      }

      const countryContainer = this.section.querySelector("#container_country");
      if (countryContainer) {
        countryContainer.innerHTML = '<span class="hdt-visually-hidden">Filter by Country</span>';
        countryContainer.appendChild(countriesSelect);
      }

      this.fullList("country");
    }

    detectedStoresPaint(countryName, cityName) {
      if (!this.storesMapData) {
        return;
      }

      const hasCountry = countryName && this.storesMapData[countryName];
      const hasCity = cityName && cityName !== "NULL";

      if (!hasCountry && !hasCity) {
        this.loadMapDefault();
        return;
      }

      if (hasCountry) {
        const country = this.storesMapData[countryName];
        if (hasCity && country.cities && country.cities[cityName]) {
          const city = country.cities[cityName];
          this.renderStoresMap(
            this.normalizeStores(city.stores),
            new google.maps.LatLng(city.lat, city.lng),
            11
          );
          return;
        }

        this.renderStoresMap(
          this.normalizeStores(country),
          new google.maps.LatLng(country.lat, country.lng),
          5
        );
        return;
      }

      if (hasCity) {
        const match = this.findCityAcrossCountries(cityName);
        if (match) {
          this.renderStoresMap(
            this.normalizeStores(match.city.stores),
            new google.maps.LatLng(match.city.lat, match.city.lng),
            11
          );
          return;
        }
      }

      this.loadMapDefault();
    }

    findCityAcrossCountries(cityName) {
      const countries = this.storesMapData || {};
      for (const countryName of Object.keys(countries)) {
        const country = countries[countryName];
        if (country.cities && country.cities[cityName]) {
          return { country: countryName, city: country.cities[cityName] };
        }
      }
      return null;
    }

    renderStoresMap(stores, center, zoom) {
      const mapOptions = {
        zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center
      };
      const map = this.createMap(mapOptions);
      this.paintStores(map, stores, () => this.addMarker(map));
    }

    storeInMap() {
      document.addEventListener("click", (event) => {
        if (!this.storesList) {
          return;
        }

        const storeItem = event.target.closest(".single-store");
        if (!storeItem || !this.storesList.contains(storeItem)) {
          return;
        }

        const isActive = storeItem.classList.contains("active");
        if (isActive) {
          storeItem.classList.remove("active");
          if (this.infoWindow) {
            this.infoWindow.close();
          }
          return;
        }

        const index = Number(storeItem.getAttribute("store-index"));
        const marker = this.markers[index];
        if (!marker) {
          return;
        }

        marker.map.setZoom(15);
        marker.map.setCenter(marker.getPosition());

        if (this.infoWindow) {
          this.infoWindow.close();
        }

        this.infoWindow = new google.maps.InfoWindow({
          content: this.contentHTML(marker.content, marker.content.name)
        });

        this.storesList.querySelectorAll(".single-store").forEach((item) => {
          item.classList.toggle("active", item === storeItem);
        });

        this.infoWindow.open(marker.map, marker);
      });
    }

    loadMapDefault() {
      if (!this.storesMapData) {
        return;
      }

      const defaultCenter = new google.maps.LatLng(this.defaultLat, this.defaultLng);
      const stores = [];

      Object.keys(this.storesMapData).forEach((countryName) => {
        stores.push(...this.normalizeStores(this.storesMapData[countryName]));
      });

      const mapOptions = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: defaultCenter
      };

      const map = this.createMap(mapOptions);
      this.paintStores(map, stores, () => this.addMarker(map));
    }

    paintStores(map, stores, onReady) {
      this.markers = [];

      stores.forEach((store) => {
        const marker = new google.maps.Marker({
          data_complete: store,
          position: { lat: store[2], lng: store[1] },
          map,
          content: store[3],
          icon: this.icon,
          title: store[0]
        });
        this.markers.push(marker);
      });

      const markers = this.markers;
      let listHtml = "<ul>";

      markers.forEach((marker, index) => {
        const store = marker.content || {};
        const phone = store.phone
          ? `<a href="tel:${store.phone}">${store.phone}</a>`
          : "";
        const whatsapp = store.whatsapp
          ? `<a href="${store.whatsapp}"><img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/whatsapp-icon.png?v=1692810271" alt="whatsapp link for ${store.whatsapp}"></a>`
          : "";

        let todaysSchedule = "";
        let scheduleList = "";
        let fullSchedule = "";
        if (store.schedules) {
          const today = new Date()
            .toLocaleDateString("en-US", { weekday: "long" })
            .toLowerCase();
          Object.keys(store.schedules).forEach((day) => {
            if (today === day) {
              todaysSchedule = `<div class="store-info todays-schedule"><i class="icon hdt-custom-icon-clock"></i> ${this.translations(this.storeLanguage, "todays_schedule")}: ${store.schedules[day]}</div>`;
            }
            scheduleList += `<dl class="schedule-item${today === day ? " current" : ""}"><dt>${this.translations(this.storeLanguage, day)}</dt><dd>${store.schedules[day]}</dd></dl>`;
          });

          if (scheduleList) {
            fullSchedule = `<div class="store-info full-schedule"><dl class="schedule-item current"><dt>${this.translations(this.storeLanguage, "store_hours")}</dt></dl>${scheduleList}</div><!--.full-schedule-->`;
          }
        }

        let deliveryOptions = "";
        let deliveryBlock = "";
        if (store.delivery_options) {
          Object.keys(store.delivery_options).forEach((optionKey) => {
            let optionLabel = "";
            if (optionKey === "delivery") {
              optionLabel = this.translations(this.storeLanguage, "delivery");
            } else if (optionKey === "store_pickup") {
              optionLabel = this.translations(this.storeLanguage, "pickup");
            } else if (optionKey === "store_shopping") {
              optionLabel = this.translations(this.storeLanguage, "instore");
            }

            if (store.delivery_options[optionKey]) {
              deliveryOptions += `<div class="delivery-option">${optionLabel}</div>`;
            }
          });

          if (deliveryOptions) {
            deliveryBlock = `<div class="store-info delivery-options"><strong class="title">${this.translations(this.storeLanguage, "delivery_options")}</strong>${deliveryOptions}</div>`;
          }
        }

        listHtml += `<li class="single-store" store-index="${index}">
                <button class="store-more-info"><span class="hdt-visually-hidden">More Info</span><span>i</span></button>
                <h4 class="store-info store-name">${store.name || ""}</h4>
                <div class="store-info store-address">${store.address || ""}</div>
                <div class="store-info store-contact">
                    ${phone || whatsapp ? `${this.translations(this.storeLanguage, "contact_line")}:&nbsp;` : ""}
                    ${phone}
                    ${whatsapp}
                </div>
                ${todaysSchedule}
                ${fullSchedule}
                ${deliveryBlock}
                <div class="store-info store-directions">
                    <a href="https://www.google.com/maps/search/?api=1&query=${store.lat}%2C${store.lng}&zoom=11" target="_blank"> ${this.translations(this.storeLanguage, "view_in")} Google Maps <img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/google-maps-icon.png?v=1692810272" style="max-width: 8px;" alt="Get directions via Google Maps for ${store.name || ""}"></a>

                    <a href="https://www.waze.com/live-map/directions?navigate=yes&to=ll.${store.lat}%2C${store.lng}" target="_blank"> ${this.translations(this.storeLanguage, "view_in")} Waze <img src="https://cdn.shopify.com/s/files/1/0598/7831/0042/files/waze-icon-2x.png?v=1692826410" alt="Get directions via Waze for ${store.name || ""}"></a>
                </div>

            </li>`;
      });

      listHtml += "</ul>";
      if (this.storesList) {
        this.storesList.innerHTML = listHtml;
      }

      if (typeof onReady === "function") {
        onReady();
      }
    }

    addMarker(map) {
      this.markers.forEach((marker) => {
        google.maps.event.addListener(marker, "click", () => {
          if (this.infoWindow) {
            this.infoWindow.close();
          }

          this.infoWindow = new google.maps.InfoWindow({
            content: this.contentHTML(marker.content, marker.content.name)
          });

          map.setZoom(15);
          map.setCenter(marker.getPosition());
          this.infoWindow.open(map, marker);
          map.panTo(marker.getPosition());
        });
      });
    }

    contentHTML(store, storeName) {
      const address = store && store.address ? store.address.trim() : "";
      const phone = store && store.phone ? store.phone.trim() : "";
      const email = store && store.email ? store.email.trim() : "";

      return `<div id="content"><div id="siteNotice"></div><h2 id="firstHeading" class="firstHeading"><strong>${storeName}</strong></h2><br><div id="bodyContent">${address ? `<p><strong> ${this.translations(this.storeLanguage, "address")}: </strong> ${address}</p>` : ""}${phone ? `<p><strong>${this.translations(this.storeLanguage, "phone")}: </strong>${phone}</p>` : ""}${email ? `<p><strong>${this.translations(this.storeLanguage, "email")}: </strong> ${email} </p>` : ""}<p><a href="https://www.google.com/maps/search/?api=1&query=${store.lat}%2C${store.lng}&zoom=11" target="_blank" style="text-decoration: underline;">${this.translations(this.storeLanguage, "get_directions")}</a></p></div></div>`;
    }

    getOption(id) {
      const select = this.section.querySelector(`#${id}`);
      if (!select) {
        return null;
      }
      return select.options[select.selectedIndex];
    }

    getURLParam(param) {
      const value =
        decodeURIComponent(
          (new RegExp(`[?|&]${param}=([^&;]+?)(&|#|;|$)`).exec(location.search) || [
            ,
            ""
          ])[1].replace(/\+/g, "%20")
        ) || null;
      return value === null ? "" : value;
    }

    fullList(type) {
      if (!this.storesMapData) {
        return;
      }

      if (type === "country") {
        let options = `<option value="NULL">${this.translations(this.storeLanguage, "select_country")}</option>`;
        Object.keys(this.storesMapData).forEach((countryName) => {
          const country = this.storesMapData[countryName];
          const label =
            this.storeLanguage === "es"
              ? countryName.replace("United States", "Estados Unidos")
              : countryName;
          options += `<option country="${countryName}" value="${String(country.lat)},${String(
            country.lng
          )}">${label}</option>`;
        });

        const countriesSelect = this.section.querySelector("#countries");
        if (countriesSelect) {
          countriesSelect.innerHTML = options;
        }
      } else {
        let options = `<option value="NULL">${this.translations(this.storeLanguage, "select_city")}</option>`;
        const countryOption = this.getOption("countries");
        const countryName = countryOption ? countryOption.getAttribute("country") : "";
        if (countryName && this.storesMapData[countryName]) {
          const cities = this.storesMapData[countryName].cities || {};
          Object.keys(cities).forEach((cityName) => {
            options += `<option value="${String(cities[cityName].lat)},${String(
              cities[cityName].lng
            )}">${cityName}</option>`;
          });
        }

        const citiesSelect = this.section.querySelector("#cities");
        if (citiesSelect) {
          citiesSelect.innerHTML = options;
        }
      }
    }

    translations(language, key) {
      const translations = {
        en: {
          select_country: "Select Country",
          select_city: "Select City",
          see_all: "See all",
          address: "Address",
          phone: "Phone",
          email: "Email",
          get_directions: "Get directions",
          view_in: "View in",
          contact_line: "Contact line",
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          todays_schedule: "Today's Hours",
          store_hours: "Store Hours",
          delivery_options: "Shopping & Delivery Options",
          delivery: "Delivery",
          pickup: "Pick-up in Store",
          instore: "In Store Shopping"
        },
        es: {
          select_country: "Seleccionar pa\u00eds",
          select_city: "Seleccionar ciudad",
          see_all: "Ver todo",
          address: "Direcci\u00f3n",
          phone: "Tel\u00e9fono",
          email: "Email",
          get_directions: "Link al mapa",
          view_in: "Ver en",
          contact_line: "L\u00ednea de Contacto",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Mi\u00e9rcoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "S\u00e1bado",
          sunday: "Domingo",
          todays_schedule: "Horario para hoy",
          store_hours: "Horarios de la tienda",
          delivery_options: "Opciones de entrega",
          delivery: "Entrega",
          pickup: "Recogida en tienda",
          instore: "Compra en la tienda"
        }
      };

      const locale = translations[language] ? language : "en";
      return translations[locale] && translations[locale][key]
        ? translations[locale][key]
        : key;
    }
  }

  const init = () => {
    document.querySelectorAll(".module.store-locator").forEach((section) => {
      new StoreLocator(section).init();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
