(function () {
  if (window.__hdtRelatedProductsCarouselA11yInit) return;
  window.__hdtRelatedProductsCarouselA11yInit = true;

  const CAROUSEL_SELECTOR = '[data-related-products-carousel]';
  const SLIDE_SELECTOR = '.hdt-slider__slide';
  const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'summary',
    'iframe',
    '[tabindex]',
    '[contenteditable="true"]'
  ].join(', ');
  const ORIGINAL_TABINDEX_ATTR = 'data-related-products-original-tabindex';

  function getSlides(carousel) {
    return Array.from(carousel.querySelectorAll(SLIDE_SELECTOR));
  }

  function getViewport(carousel) {
    return carousel.querySelector('.hdt-slider__viewport');
  }

  function getContainer(carousel) {
    return carousel.querySelector('.hdt-slider__container');
  }

  function getDotsContainer(carousel) {
    return carousel.querySelector('[hdt-slider-dots]');
  }

  function getDotButtons(carousel) {
    const dotsContainer = getDotsContainer(carousel);
    return dotsContainer ? Array.from(dotsContainer.querySelectorAll('button')) : [];
  }

  function getNavigationButtons(carousel) {
    return Array.from(carousel.querySelectorAll('.hdt-related-products-carousel__button'));
  }

  function getFocusableElements(slide) {
    return Array.from(slide.querySelectorAll(FOCUSABLE_SELECTOR));
  }

  function disableFocusableElements(slide) {
    getFocusableElements(slide).forEach((element) => {
      if (!element.hasAttribute(ORIGINAL_TABINDEX_ATTR)) {
        const originalTabIndex = element.getAttribute('tabindex');
        element.setAttribute(
          ORIGINAL_TABINDEX_ATTR,
          originalTabIndex === null ? '' : originalTabIndex
        );
      }

      element.setAttribute('tabindex', '-1');
    });
  }

  function restoreFocusableElements(slide) {
    getFocusableElements(slide).forEach((element) => {
      if (!element.hasAttribute(ORIGINAL_TABINDEX_ATTR)) return;

      const originalTabIndex = element.getAttribute(ORIGINAL_TABINDEX_ATTR);
      if (originalTabIndex === '') {
        element.removeAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', originalTabIndex);
      }

      element.removeAttribute(ORIGINAL_TABINDEX_ATTR);
    });
  }

  function getVisibleRatio(slide, viewport) {
    if (!slide || !viewport) return 0;

    const slideRect = slide.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const overlap = Math.min(slideRect.right, viewportRect.right) - Math.max(slideRect.left, viewportRect.left);

    if (overlap <= 1 || slideRect.width <= 0) return 0;
    return overlap / slideRect.width;
  }

  function getVisibleSlides(carousel) {
    const viewport = getViewport(carousel);
    const slides = getSlides(carousel);

    if (!viewport || !slides.length) return [];

    const visibleSlides = slides.filter((slide) => getVisibleRatio(slide, viewport) > 0);
    return visibleSlides.length ? visibleSlides : [slides[0]];
  }

  function buildDotLabel(template, number) {
    return (template || 'Go to slide [number]').replace('[number]', number);
  }

  function syncLabels(carousel) {
    const prevLabel = carousel.dataset.prevLabel;
    const nextLabel = carousel.dataset.nextLabel;
    const dotLabelTemplate = carousel.dataset.dotLabelTemplate;

    getNavigationButtons(carousel).forEach((button) => {
      if (button.classList.contains('hdt-slider__button--prev') && prevLabel) {
        button.setAttribute('aria-label', prevLabel);
      }

      if (button.classList.contains('hdt-slider__button--next') && nextLabel) {
        button.setAttribute('aria-label', nextLabel);
      }
    });

    getDotButtons(carousel).forEach((button, index) => {
      button.setAttribute('aria-label', buildDotLabel(dotLabelTemplate, index + 1));
    });
  }

  function syncControlsVisibility(carousel, hasOverflow) {
    getNavigationButtons(carousel).forEach((button) => {
      button.toggleAttribute('hidden', !hasOverflow);
      button.setAttribute('aria-hidden', hasOverflow ? 'false' : 'true');
    });

    const dotsContainer = getDotsContainer(carousel);
    if (dotsContainer) {
      dotsContainer.toggleAttribute('hidden', !hasOverflow);
      dotsContainer.setAttribute('aria-hidden', hasOverflow ? 'false' : 'true');
    }
  }

  function getFocusFallback(carousel) {
    const dotsContainer = getDotsContainer(carousel);
    const currentDot =
      dotsContainer && !dotsContainer.hasAttribute('hidden')
        ? dotsContainer.querySelector('button[aria-current="true"]')
        : null;

    return (
      currentDot ||
      carousel.querySelector('.hdt-slider__button--next:not([disabled]):not([hidden])') ||
      carousel.querySelector('.hdt-slider__button--prev:not([disabled]):not([hidden])') ||
      carousel
    );
  }

  function hasOverflow(carousel, visibleSlides) {
    const viewport = getViewport(carousel);
    const container = getContainer(carousel);
    const slides = getSlides(carousel);

    if (!viewport || !container || slides.length <= 1) return false;
    if (container.scrollWidth > viewport.clientWidth + 1) return true;

    return visibleSlides.length < slides.length;
  }

  function applyCarouselState(carousel) {
    const slides = getSlides(carousel);
    if (!slides.length) return;

    const visibleSlides = getVisibleSlides(carousel);
    const overflow = hasOverflow(carousel, visibleSlides);
    let shouldMoveFocus = false;

    syncLabels(carousel);
    syncControlsVisibility(carousel, overflow);

    slides.forEach((slide) => {
      const isVisible = visibleSlides.includes(slide);

      if (!isVisible && slide.contains(document.activeElement)) {
        shouldMoveFocus = true;
      }

      slide.setAttribute('aria-hidden', isVisible ? 'false' : 'true');

      if (isVisible) {
        restoreFocusableElements(slide);
      } else {
        disableFocusableElements(slide);
      }
    });

    if (shouldMoveFocus) {
      window.requestAnimationFrame(() => {
        const focusTarget = getFocusFallback(carousel);
        if (focusTarget && typeof focusTarget.focus === 'function') {
          focusTarget.focus();
        }
      });
    }
  }

  function queueSync(carousel) {
    const sync = function () {
      applyCarouselState(carousel);
    };

    window.requestAnimationFrame(sync);
    window.setTimeout(sync, 80);
    window.setTimeout(sync, 240);
  }

  function observeCarousel(carousel) {
    if (carousel.dataset.relatedProductsCarouselReady === 'true') return;
    carousel.dataset.relatedProductsCarouselReady = 'true';

    const viewport = getViewport(carousel);
    const container = getContainer(carousel);

    if (!viewport || !container) return;

    const intersectionObserver = new IntersectionObserver(
      function () {
        queueSync(carousel);
      },
      {
        root: viewport,
        threshold: [0, 0.01, 0.25, 0.5, 0.75, 1]
      }
    );

    const observeSlides = function () {
      intersectionObserver.disconnect();
      getSlides(carousel).forEach((slide) => intersectionObserver.observe(slide));
      queueSync(carousel);
    };

    const mutationObserver = new MutationObserver(function () {
      observeSlides();
    });

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    const dotsContainer = getDotsContainer(carousel);
    if (dotsContainer) {
      mutationObserver.observe(dotsContainer, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['aria-current', 'class']
      });
    }

    getNavigationButtons(carousel).forEach((button) => {
      mutationObserver.observe(button, {
        attributes: true,
        attributeFilter: ['disabled', 'hidden', 'class']
      });
    });

    carousel.addEventListener('click', function (event) {
      if (
        event.target.closest('.hdt-slider__button') ||
        event.target.closest('[hdt-slider-dots] button')
      ) {
        queueSync(carousel);
      }
    });

    carousel.addEventListener('keyup', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        queueSync(carousel);
      }
    });

    carousel.addEventListener('pointerup', function () {
      queueSync(carousel);
    });

    carousel.addEventListener('touchend', function () {
      queueSync(carousel);
    });

    carousel.addEventListener('transitionend', function () {
      queueSync(carousel);
    });

    window.addEventListener('resize', function () {
      queueSync(carousel);
    });

    observeSlides();
    queueSync(carousel);
  }

  function initIn(root) {
    if (!root) return;

    if (root.matches && root.matches(CAROUSEL_SELECTOR)) {
      observeCarousel(root);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll(CAROUSEL_SELECTOR).forEach(observeCarousel);
    }
  }

  function initMutationObserver() {
    if (!document.body) return;

    const documentObserver = new MutationObserver(function (mutations) {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            initIn(node);
          }
        });
      });
    });

    documentObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initIn(document);
      initMutationObserver();
    });
  } else {
    initIn(document);
    initMutationObserver();
  }

  document.addEventListener('shopify:section:load', function (event) {
    initIn(event.target);
  });
})();
