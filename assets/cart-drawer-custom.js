/* cart-drawer-custom.js */
(function () {
  'use strict';

  function getCartDrawerHeading(cartDrawer) {
    if (!cartDrawer) return null;

    var headingId = cartDrawer.getAttribute('aria-labelledby');
    if (!headingId) return null;

    var heading = document.getElementById(headingId);
    if (!heading || !cartDrawer.contains(heading)) return null;

    return heading;
  }

  function focusHeading(heading) {
    try {
      heading.focus({ preventScroll: true });
    } catch (error) {
      heading.focus();
    }
  }

  function focusCartDrawerHeading(cartDrawer, attempt) {
    var heading = getCartDrawerHeading(cartDrawer);
    if (!heading) return;

    focusHeading(heading);

    if (document.activeElement === heading || attempt > 0) return;

    window.requestAnimationFrame(function () {
      window.setTimeout(function () {
        focusCartDrawerHeading(cartDrawer, attempt + 1);
      }, 0);
    });
  }

  function bindCartDrawerFocusHandler() {
    var cartDrawer = document.getElementById('CartDrawer');

    if (!(cartDrawer instanceof HTMLElement)) return;
    if (cartDrawer.dataset.cartDrawerFocusBound === 'true') return;

    cartDrawer.dataset.cartDrawerFocusBound = 'true';
    cartDrawer.addEventListener('dialog:afterOpen', function () {
      focusCartDrawerHeading(cartDrawer, 0);
    });
  }

  bindCartDrawerFocusHandler();
  document.addEventListener('shopify:section:load', bindCartDrawerFocusHandler);
})();
