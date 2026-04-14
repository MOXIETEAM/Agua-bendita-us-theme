/* product-sticky-atc-mobile.js */
/* Show sticky add-to-cart button on mobile scroll */
/* When no size selected: clicking "Add to bag" shows a size picker panel */
/* When size selected: clicking "Add to bag" adds directly to cart */
(function () {
  'use strict';

  function isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  }

  function getTranslations() {
    var translations = {
      addToCart: 'Add to bag',
      soldOut: 'Sold out',
      preOrder: 'Pre-order'
    };
    if (window.themeHDN && window.themeHDN.strings) {
      if (themeHDN.strings.addToCart) translations.addToCart = themeHDN.strings.addToCart;
      if (themeHDN.strings.soldOut) translations.soldOut = themeHDN.strings.soldOut;
      if (themeHDN.strings.preOrder) translations.preOrder = themeHDN.strings.preOrder;
    }
    return translations;
  }

  /* ============================================
   * Size Picker (module-level so closeSizePicker is accessible everywhere)
   * ============================================ */
  var sizePickerEl = null;

  function closeSizePicker() {
    if (!sizePickerEl) return;
    sizePickerEl.classList.remove('is-open');
    setTimeout(function () {
      if (!sizePickerEl.classList.contains('is-open')) {
        sizePickerEl.setAttribute('hidden', '');
      }
    }, 350);
  }

  function openSizePicker() {
    if (!sizePickerEl) return;
    sizePickerEl.removeAttribute('hidden');
    // Force reflow so the CSS transition fires
    void sizePickerEl.offsetHeight;
    sizePickerEl.classList.add('is-open');
  }

  /* ============================================
   * Main init
   * ============================================ */
  function init() {
    var stickyBtn = document.querySelector('hdt-sticky-btn-atc');
    if (!stickyBtn) return;

    // Find the product form or variant picker to use as scroll trigger
    var productForm = document.querySelector('.hdt-product__variant-picker') ||
                      document.querySelector('.hdt-product-form') ||
                      document.querySelector('[data-type="_product-buy-button"]');
    if (!productForm) return;

    var ticking = false;

    function updateStickyVisibility() {
      if (!isMobile()) {
        document.body.classList.remove('sticky-shown-mobile');
        return;
      }
      var rect = productForm.getBoundingClientRect();
      if (rect.bottom < 0) {
        document.body.classList.add('sticky-shown-mobile');
      } else {
        document.body.classList.remove('sticky-shown-mobile');
        closeSizePicker();
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateStickyVisibility);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateStickyVisibility);
        ticking = true;
      }
    }, { passive: true });

    updateStickyVisibility();

    // Variant sync
    initStickyVariantSync(stickyBtn);

    // Size picker
    initSizePicker(stickyBtn);

    // Wishlist sync
    var syncWishlistPlacement = initStickyWishlistSync(stickyBtn);
    if (typeof syncWishlistPlacement === 'function') {
      var origUpdate = updateStickyVisibility;
      updateStickyVisibility = function () {
        origUpdate();
        syncWishlistPlacement();
      };
    }
  }

  /* ============================================
   * Size Picker initialisation
   * ============================================ */
  function initSizePicker(stickyBtn) {
    // Size picker lives OUTSIDE hdt-sticky-btn-atc, as a sibling
    sizePickerEl = document.querySelector('[data-sticky-size-picker]');
    if (!sizePickerEl) return;

    // Move to <body> so position:fixed covers the full viewport
    // (ancestor transforms/overflow can break fixed positioning)
    document.body.appendChild(sizePickerEl);

    var stickySelect = stickyBtn.querySelector('select[name="id"]');
    var stickySubmitBtn = stickyBtn.querySelector('.hdt-sticky-atc__submit');
    if (!stickySubmitBtn) return;

    // Always show size picker on mobile, regardless of variant selection state
    stickySubmitBtn.addEventListener('click', function (e) {
      if (!isMobile()) return;

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      openSizePicker();
      return false;
    });

    // Close button
    var closeBtn = sizePickerEl.querySelector('[data-sticky-size-picker-close]');
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeSizePicker();
      });
    }

    // Overlay click to close
    var overlay = sizePickerEl.querySelector('[data-sticky-size-picker-overlay]');
    if (overlay) {
      overlay.addEventListener('click', closeSizePicker);
    }

    // Handle size option clicks → add-to-cart immediately
    var sizeOptions = sizePickerEl.querySelectorAll('.hdt-sticky-size-picker__option');
    sizeOptions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var variantId = btn.getAttribute('data-variant-id');
        var isAvailable = btn.getAttribute('data-available') === 'true';
        if (!variantId || !isAvailable) return;

        // Highlight
        sizeOptions.forEach(function (b) { b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        btn.classList.add('is-loading');

        // Sync the hidden sticky <select>
        if (stickySelect) {
          stickySelect.value = variantId;
          stickySelect.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // Add to cart using the same pattern as the theme's SizeATC class
        addToCartTheme(variantId, function (success) {
          btn.classList.remove('is-loading');
          if (success) {
            closeSizePicker();
          }
        });
      });
    });
  }

  /* ============================================
   * Add-to-cart using The4 theme conventions
   * Mirrors the SizeATC class in custom.js
   * ============================================ */
  function addToCartTheme(variantId, callback) {
    var CartDrawer = document.querySelector('hdt-cart-drawer');
    var sections = '';
    if (CartDrawer) {
      sections = CartDrawer.getAttribute('section-id') || '';
    }

    var formData = {
      items: [{ id: parseInt(variantId, 10), quantity: 1 }]
    };
    if (sections) {
      formData.sections = sections;
    }

    // Show theme loading indicator
    document.dispatchEvent(new CustomEvent('theme:loading:doing', { bubbles: true }));

    var rootPath = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';

    fetch(rootPath + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(function (response) { return response.json(); })
    .then(function (res) {
      if (res.status && res.status >= 400) {
        // Error from Shopify (e.g. out of stock)
        document.dispatchEvent(new CustomEvent('notication:show', {
          bubbles: true,
          detail: {
            text: function () {
              return (window.themeHDN && window.themeHDN.extras && window.themeHDN.extras.notice_stock_msg)
                ? window.themeHDN.extras.notice_stock_msg.replace('[max]', 0)
                : (res.description || res.message || 'Could not add to cart');
            }
          }
        }));
        if (typeof callback === 'function') callback(false);
      } else {
        // Success — dispatch theme events to open cart drawer & update count
        document.dispatchEvent(new CustomEvent('cart:change', {
          bubbles: true,
          detail: {
            baseEvent: 'variant:add',
            actionAfterATC: '',
            cart: res
          }
        }));
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
        if (typeof callback === 'function') callback(true);
      }
      document.dispatchEvent(new CustomEvent('theme:loading:done', { bubbles: true }));
    })
    .catch(function (err) {
      console.error('Sticky ATC: Add to cart error', err);
      document.dispatchEvent(new CustomEvent('theme:loading:done', { bubbles: true }));
      if (typeof callback === 'function') callback(false);
    });
  }

  /* ============================================
   * Wishlist sync
   * ============================================ */
  function initStickyWishlistSync(stickyBtn) {
    var slot = stickyBtn.querySelector('[data-sticky-wishlist-slot]');
    if (!slot) return null;

    var mainWishlist =
      document.querySelector('.hdt-main-product-form .wishlisthero-pdp-custom-button') ||
      document.querySelector('.hdt-main-product-form .wishlist-hero-custom-button');
    if (!mainWishlist || !mainWishlist.parentNode) return null;

    var placeholder = document.createElement('span');
    placeholder.setAttribute('data-sticky-wishlist-placeholder', '');
    placeholder.style.display = 'none';
    mainWishlist.parentNode.insertBefore(placeholder, mainWishlist);

    function moveToSlot() {
      if (!mainWishlist || !slot) return;
      if (slot.contains(mainWishlist)) return;
      slot.appendChild(mainWishlist);
    }
    function moveBackToOrigin() {
      if (!mainWishlist || !placeholder || !placeholder.parentNode) return;
      if (placeholder.parentNode.contains(mainWishlist)) return;
      placeholder.parentNode.insertBefore(mainWishlist, placeholder.nextSibling);
    }
    function syncPlacement() {
      if (!isMobile()) { moveBackToOrigin(); return; }
      if (document.body.classList.contains('sticky-shown-mobile')) {
        moveToSlot();
      } else {
        moveBackToOrigin();
      }
    }

    if (window.MutationObserver) {
      var bodyObserver = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'class') {
            syncPlacement();
            break;
          }
        }
      });
      bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
    setTimeout(syncPlacement, 250);
    return syncPlacement;
  }

  /* ============================================
   * Variant sync (sticky <select> ↔ main picker)
   * ============================================ */
  function initStickyVariantSync(stickyBtn) {
    var stickySelect = stickyBtn.querySelector('select[name="id"]');
    var stickySubmitBtn = stickyBtn.querySelector('.hdt-sticky-atc__submit');
    if (!stickySelect || !stickySubmitBtn) return;

    var btnTextEl = stickySubmitBtn.querySelector('.hdt-btn-atc_text');
    if (!btnTextEl) return;

    var qtyPriceEl = stickySubmitBtn.querySelector('hdt-qty-price');
    var moneyEl = qtyPriceEl ? qtyPriceEl.querySelector('.hdt-money') : null;

    var translations = getTranslations();
    // Always "Add to bag"
    translations.addToCart = 'Add to bag';
    if (window.themeHDN && window.themeHDN.strings && window.themeHDN.strings.addToCart) {
      translations.addToCart = window.themeHDN.strings.addToCart;
    }

    function formatMoney(cents) {
      try {
        var format =
          (window.themeHDN && window.themeHDN.settings && (window.themeHDN.settings.currencyFormat || window.themeHDN.settings.moneyFormat)) ||
          (window.Shopify && Shopify.money_format) || null;
        if (window.Shopify && typeof Shopify.formatMoney === 'function' && format) {
          return Shopify.formatMoney(cents, format);
        }
      } catch (e) {}
      return String(cents);
    }

    function setQtyPriceVisibility(v) {
      if (!qtyPriceEl) return;
      if (v) qtyPriceEl.removeAttribute('hidden');
      else qtyPriceEl.setAttribute('hidden', '');
    }

    function updateQtyPriceFromOption(el) {
      if (!qtyPriceEl || !moneyEl || !el) return;
      var p = el.getAttribute('data-price');
      if (!p) return;
      qtyPriceEl.setAttribute('variant-price', p);
      moneyEl.innerHTML = formatMoney(parseInt(p, 10));
    }

    function getMainSelectedVariantId() {
      var vp = document.querySelector('hdt-variant-picker[id^="variant-picker-"]');
      if (vp) {
        var s = vp.getAttribute('selected-variant');
        if (s) return s;
      }
      var inp = document.querySelector('.hdt-main-product-form input[name="id"]:not([disabled])');
      if (inp && inp.value) return inp.value;
      return null;
    }

    function syncStickySelectFromMain() {
      var vid = getMainSelectedVariantId();
      if (!vid) {
        if (stickySelect.value !== '') stickySelect.value = '';
        return;
      }
      if (stickySelect.value !== vid) stickySelect.value = vid;
    }

    function updateButtonState() {
      var opt = stickySelect.options[stickySelect.selectedIndex];
      if (!opt) return;

      var val = opt.value;
      var isPlaceholder = opt.hasAttribute('data-placeholder') || val === '';
      var isDisabled = opt.disabled && !isPlaceholder;
      var text = opt.textContent || '';
      var avail = opt.getAttribute('data-available');

      // Placeholder → always "Add to bag", keep enabled
      if (isPlaceholder) {
        stickySubmitBtn.disabled = false;
        stickySubmitBtn.removeAttribute('disabled');
        btnTextEl.textContent = translations.addToCart;
        setQtyPriceVisibility(false);
        return;
      }

      var isSoldOut = isDisabled || avail === 'false' || text.toLowerCase().indexOf('sold out') > -1;
      if (isSoldOut) {
        stickySubmitBtn.disabled = true;
        stickySubmitBtn.setAttribute('disabled', 'true');
        btnTextEl.textContent = translations.soldOut;
        setQtyPriceVisibility(false);
      } else {
        stickySubmitBtn.disabled = false;
        stickySubmitBtn.removeAttribute('disabled');
        setQtyPriceVisibility(true);
        updateQtyPriceFromOption(opt);
        btnTextEl.textContent = translations.addToCart;
      }
    }

    // Listen for changes on the sticky variant select
    ['change', 'input'].forEach(function (ev) {
      stickySelect.addEventListener(ev, updateButtonState);
    });

    // Sync when main variant picker changes
    ['variant:change', 'theme:variant:change', 'variant:changed', 'theme:variant:changed'].forEach(function (ev) {
      document.addEventListener(ev, function () {
        setTimeout(function () {
          syncStickySelectFromMain();
          updateButtonState();
        }, 100);
      });
    });

    document.addEventListener('change', function (e) {
      if (e.target && e.target.closest) {
        if (e.target.closest('hdt-sticky-btn-atc')) return;
        if (e.target.closest('.hdt-product__variant-picker') ||
            e.target.closest('hdt-variant-picker') ||
            e.target.closest('.hdt-product-form')) {
          setTimeout(function () {
            syncStickySelectFromMain();
            updateButtonState();
          }, 100);
        }
      }
    });

    // Watch for selected-variant attribute changes
    var vpEl = document.querySelector('hdt-variant-picker[id^="variant-picker-"]');
    if (vpEl && window.MutationObserver) {
      new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          if (muts[i].attributeName === 'selected-variant') {
            setTimeout(function () { syncStickySelectFromMain(); updateButtonState(); }, 50);
            break;
          }
        }
      }).observe(vpEl, { attributes: true });
    }

    // Initial sync
    setTimeout(function () { syncStickySelectFromMain(); updateButtonState(); }, 200);

    // Prevent theme from resetting button state
    var isUpdating = false;
    new MutationObserver(function (muts) {
      if (isUpdating) return;
      muts.forEach(function (m) {
        if (m.attributeName === 'disabled') {
          setTimeout(function () {
            isUpdating = true;
            updateButtonState();
            setTimeout(function () { isUpdating = false; }, 100);
          }, 50);
        }
      });
    }).observe(stickySubmitBtn, { attributes: true });

    new MutationObserver(function () {
      if (isUpdating) return;
      setTimeout(function () {
        isUpdating = true;
        updateButtonState();
        setTimeout(function () { isUpdating = false; }, 100);
      }, 50);
    }).observe(stickySelect, { childList: true, subtree: true });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
