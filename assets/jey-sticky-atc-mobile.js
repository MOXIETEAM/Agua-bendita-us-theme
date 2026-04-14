/* jey-sticky-atc-mobile.js */
/* Show sticky add-to-cart button on mobile scroll, even without selecting a size */
/* Also sync sticky button state when variant is changed in the sticky dropdown */
(function () {
  'use strict';

  // Only run on mobile (max-width: 767px)
  function isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  }

  // Only run on product pages
  function isProductPage() {
    return document.body.classList.contains('hdt-page-type-product');
  }

  // Get translation strings from themeHDN or fallback
  function getTranslations() {
    var translations = {
      addToCart: 'Add to bag',
      soldOut: 'Sold out',
      preOrder: 'Pre-order'
    };

    // Try to get translations from theme settings
    if (window.themeHDN && window.themeHDN.strings) {
      if (themeHDN.strings.addToCart) translations.addToCart = themeHDN.strings.addToCart;
      if (themeHDN.strings.soldOut) translations.soldOut = themeHDN.strings.soldOut;
      if (themeHDN.strings.preOrder) translations.preOrder = themeHDN.strings.preOrder;
    }

    return translations;
  }

  function init() {
    if (!isProductPage()) return;

    var stickyBtn = document.querySelector('hdt-sticky-btn-atc');
    if (!stickyBtn) return;

    // Find the product form or variant picker to use as scroll trigger
    var productForm = document.querySelector('.hdt-product__variant-picker') ||
                      document.querySelector('.hdt-product-form') ||
                      document.querySelector('[data-type="_product-buy-button"]');

    if (!productForm) return;

    var lastScrollY = 0;
    var ticking = false;

    function updateStickyVisibility() {
      if (!isMobile()) {
        // On desktop, let the theme handle it
        document.body.classList.remove('sticky-shown-mobile');
        return;
      }

      var rect = productForm.getBoundingClientRect();
      var productFormBottom = rect.bottom;

      // Show sticky button when product form scrolls above viewport
      if (productFormBottom < 0) {
        document.body.classList.add('sticky-shown-mobile');
      } else {
        document.body.classList.remove('sticky-shown-mobile');
      }

      ticking = false;
    }

    function onScroll() {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateStickyVisibility);
        ticking = true;
      }
    }

    // Listen for scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // Listen for resize to handle orientation changes
    window.addEventListener('resize', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateStickyVisibility);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    updateStickyVisibility();

    // ============================================
    // Sticky variant select -> button state sync
    // ============================================
    initStickyVariantSync(stickyBtn);
  }

  function initStickyVariantSync(stickyBtn) {
    var stickySelect = stickyBtn.querySelector('select[name="id"]');
    var stickySubmitBtn = stickyBtn.querySelector('.hdt-sticky-atc__submit');

    if (!stickySelect || !stickySubmitBtn) return;

    var btnTextEl = stickySubmitBtn.querySelector('.hdt-btn-atc_text');
    if (!btnTextEl) return;

    var translations = getTranslations();

    // Store the button text options
    // Use "Add to bag" as the default - this matches the Agua Bendita site
    translations.addToCart = 'Add to bag';
    translations.chooseOptions = 'Choose options';
    
    // Try to get the actual texts from themeHDN if available
    if (window.themeHDN && window.themeHDN.strings) {
      if (window.themeHDN.strings.addToCart) translations.addToCart = window.themeHDN.strings.addToCart;
      if (window.themeHDN.strings.chooseOptions) translations.chooseOptions = window.themeHDN.strings.chooseOptions;
    }

    function updateButtonState() {
      var selectedOption = stickySelect.options[stickySelect.selectedIndex];
      if (!selectedOption) return;

      var optionValue = selectedOption.value;
      var isPlaceholder = selectedOption.hasAttribute('data-placeholder') || optionValue === '';
      var isDisabled = selectedOption.disabled && !isPlaceholder;
      var optionText = selectedOption.textContent || '';
      var dataAvailable = selectedOption.getAttribute('data-available');

      // Check if no variant is selected (placeholder option)
      if (isPlaceholder) {
        stickySubmitBtn.disabled = true;
        stickySubmitBtn.setAttribute('disabled', 'true');
        btnTextEl.textContent = translations.chooseOptions;
        return;
      }

      // Check if it's sold out (option is disabled, data-available is false, or text contains "sold out")
      var isSoldOut = isDisabled || 
                      dataAvailable === 'false' || 
                      optionText.toLowerCase().indexOf('sold out') > -1;

      if (isSoldOut) {
        stickySubmitBtn.disabled = true;
        stickySubmitBtn.setAttribute('disabled', 'true');
        btnTextEl.textContent = translations.soldOut;
      } else {
        stickySubmitBtn.disabled = false;
        stickySubmitBtn.removeAttribute('disabled');
        // Check if it might be pre-order (text contains pre-order indicator)
        if (optionText.toLowerCase().indexOf('pre-order') > -1 || 
            optionText.toLowerCase().indexOf('preorder') > -1) {
          btnTextEl.textContent = translations.preOrder;
        } else {
          btnTextEl.textContent = translations.addToCart;
        }
      }
    }

    // Listen for changes on the sticky variant select (multiple event types for compatibility)
    ['change', 'input'].forEach(function (eventName) {
      stickySelect.addEventListener(eventName, function () {
        updateButtonState();
      });
    });

    // Also sync when main variant picker changes (listen to multiple event types)
    ['variant:change', 'theme:variant:change'].forEach(function (eventName) {
      document.addEventListener(eventName, function (e) {
        // Wait a tick for the theme to update the sticky select
        setTimeout(function () {
          updateButtonState();
        }, 100);
      });
    });

    // Listen for changes on form inputs (for main variant picker sync)
    document.addEventListener('change', function (e) {
      // Only respond to changes within the product form, not the sticky bar itself
      if (e.target && e.target.closest) {
        if (e.target.closest('hdt-sticky-btn-atc')) {
          // This is a change in the sticky bar - already handled above
          return;
        }
        if (e.target.closest('.hdt-product__variant-picker') || 
            e.target.closest('hdt-variant-picker') ||
            e.target.closest('.hdt-product-form')) {
          // This is a change in the main variant picker
          setTimeout(function () {
            updateButtonState();
          }, 100);
        }
      }
    });

    // Initial sync on page load (with delay to ensure theme has initialized)
    setTimeout(updateButtonState, 200);

    // Flag to prevent recursion when we update the button ourselves
    var isUpdating = false;

    // Also watch for attribute changes on the button (in case theme resets it)
    var observer = new MutationObserver(function (mutations) {
      if (isUpdating) return;
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
          // The theme changed the button state, re-sync based on current selection
          setTimeout(function () {
            isUpdating = true;
            updateButtonState();
            setTimeout(function () { isUpdating = false; }, 100);
          }, 50);
        }
      });
    });
    observer.observe(stickySubmitBtn, { attributes: true });

    // Watch for changes to the select's selected option (in case theme programmatically changes it)
    var selectObserver = new MutationObserver(function () {
      if (isUpdating) return;
      setTimeout(function () {
        isUpdating = true;
        updateButtonState();
        setTimeout(function () { isUpdating = false; }, 100);
      }, 50);
    });
    selectObserver.observe(stickySelect, { 
      childList: true,
      subtree: true
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
