(function () {
  if (window.__hdtAnnouncementCarouselInit) return;
  window.__hdtAnnouncementCarouselInit = true;

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

  function getSlides(carousel) {
    return Array.from(carousel.querySelectorAll('[data-announcement-slide]'));
  }

  function getDots(carousel) {
    return Array.from(carousel.querySelectorAll('[hdt-slider-dots] button'));
  }

  function getFocusableElements(slide) {
    return Array.from(slide.querySelectorAll(FOCUSABLE_SELECTOR));
  }

  function disableFocusableElements(slide) {
    getFocusableElements(slide).forEach((element) => {
      if (!element.hasAttribute('data-announcement-original-tabindex')) {
        const originalTabIndex = element.getAttribute('tabindex');
        element.setAttribute(
          'data-announcement-original-tabindex',
          originalTabIndex === null ? '' : originalTabIndex
        );
      }
      element.setAttribute('tabindex', '-1');
    });
  }

  function restoreFocusableElements(slide) {
    getFocusableElements(slide).forEach((element) => {
      if (!element.hasAttribute('data-announcement-original-tabindex')) return;

      const originalTabIndex = element.getAttribute('data-announcement-original-tabindex');
      if (originalTabIndex === '') {
        element.removeAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', originalTabIndex);
      }
      element.removeAttribute('data-announcement-original-tabindex');
    });
  }

  function getVisibleRatio(slide, viewport) {
    if (!slide || !viewport) return 0;

    const slideRect = slide.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const overlap = Math.min(slideRect.right, viewportRect.right) - Math.max(slideRect.left, viewportRect.left);

    if (overlap <= 0 || slideRect.width <= 0) return 0;
    return overlap / slideRect.width;
  }

  function buildDotLabel(template, number) {
    return (template || 'Go to slide [number]').replace('[number]', number);
  }

  function syncDots(carousel, activeLogicalIndex) {
    const labelTemplate = carousel.dataset.dotLabelTemplate;

    getDots(carousel).forEach((dot, index) => {
      const slideNumber = index + 1;
      const isActive = slideNumber === activeLogicalIndex;

      dot.setAttribute('aria-label', buildDotLabel(labelTemplate, slideNumber));
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function getFocusFallback(carousel) {
    return (
      carousel.querySelector('[hdt-slider-dots] button[aria-current="true"]') ||
      carousel.querySelector('.hdt-slider__button--next:not([disabled])') ||
      carousel.querySelector('.hdt-slider__button--prev:not([disabled])') ||
      carousel
    );
  }

  function applyCarouselState(carousel, activeSlide) {
    const slides = getSlides(carousel);
    if (!slides.length) return;

    const resolvedActiveSlide = activeSlide || slides[0];
    const activeLogicalIndex = parseInt(resolvedActiveSlide.dataset.announcementSlideIndex, 10) || 1;

    syncDots(carousel, activeLogicalIndex);

    let shouldMoveFocus = false;

    slides.forEach((slide) => {
      const isActive = slide === resolvedActiveSlide;

      if (!isActive && slide.contains(document.activeElement)) {
        shouldMoveFocus = true;
      }

      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

      if (isActive) {
        restoreFocusableElements(slide);
      } else {
        disableFocusableElements(slide);
      }
    });

    carousel.__announcementActiveSlide = resolvedActiveSlide;

    if (shouldMoveFocus) {
      window.requestAnimationFrame(() => {
        const focusTarget = getFocusFallback(carousel);
        if (focusTarget && typeof focusTarget.focus === 'function') {
          focusTarget.focus();
        }
      });
    }
  }

  function resolveActiveSlide(carousel) {
    const viewport = carousel.querySelector('.hdt-slider__viewport');
    const slides = getSlides(carousel);
    if (!viewport || !slides.length) return null;

    let bestSlide = carousel.__announcementActiveSlide || slides[0];
    let bestRatio = -1;

    slides.forEach((slide) => {
      const ratio = getVisibleRatio(slide, viewport);
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestSlide = slide;
      }
    });

    return bestSlide;
  }

  function queueSync(carousel) {
    const sync = () => applyCarouselState(carousel, resolveActiveSlide(carousel));

    window.requestAnimationFrame(sync);
    window.setTimeout(sync, 80);
    window.setTimeout(sync, 240);
  }

  function observeCarousel(carousel) {
    if (carousel.dataset.announcementCarouselReady === 'true') return;
    carousel.dataset.announcementCarouselReady = 'true';

    const viewport = carousel.querySelector('.hdt-slider__viewport');
    const container = carousel.querySelector('.hdt-slider__container');

    if (!viewport || !container) return;

    const intersectionObserver = new IntersectionObserver(
      () => {
        applyCarouselState(carousel, resolveActiveSlide(carousel));
      },
      {
        root: viewport,
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const observeSlides = () => {
      intersectionObserver.disconnect();
      getSlides(carousel).forEach((slide) => intersectionObserver.observe(slide));
      applyCarouselState(carousel, resolveActiveSlide(carousel));
    };

    const mutationObserver = new MutationObserver(() => {
      observeSlides();
      queueSync(carousel);
    });

    mutationObserver.observe(container, {
      childList: true,
      subtree: true
    });

    const dotsContainer = carousel.querySelector('[hdt-slider-dots]');
    if (dotsContainer) {
      mutationObserver.observe(dotsContainer, {
        childList: true,
        subtree: true
      });
    }

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

    container.addEventListener('transitionend', function () {
      queueSync(carousel);
    });

    window.addEventListener('resize', function () {
      queueSync(carousel);
    });

    observeSlides();
    queueSync(carousel);
  }

  function initAnnouncementCarousels(root) {
    root.querySelectorAll('[data-announcement-carousel]').forEach(observeCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAnnouncementCarousels(document);
    });
  } else {
    initAnnouncementCarousels(document);
  }

  document.addEventListener('shopify:section:load', function (event) {
    initAnnouncementCarousels(event.target);
  });
})();
