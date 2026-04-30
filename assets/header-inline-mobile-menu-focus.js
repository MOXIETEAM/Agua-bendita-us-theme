(() => {
  const drawer = document.getElementById("menu_mobile");

  if (!drawer) return;

  const menuTriggerSelector = '.hdt-push-menu-btn[aria-controls="menu_mobile"]';
  const pointerOpenWindow = 1000;
  const closeBlurAttempts = 40;
  const closeBlurInterval = 75;
  let pendingPointerTrigger = null;
  let pendingPointerTime = 0;
  let openedByPointer = false;
  let openedByPointerTrigger = null;
  let closeBlurRun = 0;

  const getMenuTrigger = (target) => {
    if (!(target instanceof Element)) return null;

    return target.closest(menuTriggerSelector);
  };

  const getTransparentHeaderTrigger = (target) => {
    const trigger = getMenuTrigger(target);

    if (!trigger || !trigger.closest(".transparent-header")) return null;

    return trigger;
  };

  const getDialogTarget = () => {
    const dialog = drawer.shadowRoot?.querySelector('[role="dialog"][aria-modal="true"]');

    if (dialog) {
      if (!dialog.hasAttribute("tabindex")) {
        dialog.setAttribute("tabindex", "-1");
      }

      return dialog;
    }

    return drawer;
  };

  const focusDialog = () => {
    if (!drawer.hasAttribute("open")) return;

    const target = getDialogTarget();
    if (!target) return;

    target.focus({ preventScroll: true });
  };

  const queueFocus = () => {
    let attempts = 8;

    const tryFocus = () => {
      if (!drawer.hasAttribute("open")) return;

      const target = getDialogTarget();
      if (!target) {
        if (attempts > 0) {
          attempts -= 1;
          window.setTimeout(tryFocus, 50);
        }
        return;
      }

      focusDialog();

      const activeElement = drawer.shadowRoot?.activeElement || document.activeElement;
      if (activeElement === target || attempts === 0) return;

      attempts -= 1;
      window.setTimeout(tryFocus, 50);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(tryFocus);
    });
  };

  const notePointerOpen = (event) => {
    const trigger = getTransparentHeaderTrigger(event.target);

    pendingPointerTrigger = trigger;
    pendingPointerTime = trigger ? Date.now() : 0;
  };

  const noteKeyboardOpen = (event) => {
    if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
    if (!getMenuTrigger(event.target)) return;

    pendingPointerTrigger = null;
    pendingPointerTime = 0;
    openedByPointer = false;
    openedByPointerTrigger = null;
  };

  const markOpenInput = () => {
    const pointerIsRecent = pendingPointerTrigger && Date.now() - pendingPointerTime < pointerOpenWindow;

    openedByPointer = Boolean(pointerIsRecent);
    openedByPointerTrigger = pointerIsRecent ? pendingPointerTrigger : null;
    pendingPointerTrigger = null;
    pendingPointerTime = 0;
  };

  const clearOpenInput = () => {
    openedByPointer = false;
    openedByPointerTrigger = null;
  };

  const clearTriggerFocus = (trigger) => {
    const bodyTabindex = document.body.getAttribute("tabindex");

    trigger.blur();

    if (document.activeElement === trigger || trigger.closest(".transparent-header")?.matches(":focus-within")) {
      document.body.setAttribute("tabindex", "-1");
      document.body.focus({ preventScroll: true });
    }

    if (bodyTabindex === null) {
      document.body.removeAttribute("tabindex");
    } else {
      document.body.setAttribute("tabindex", bodyTabindex);
    }
  };

  const blurReturnedPointerTrigger = (resetOnDone = false) => {
    if (!openedByPointer || !openedByPointerTrigger || drawer.hasAttribute("open")) {
      if (resetOnDone) clearOpenInput();
      return;
    }

    const run = ++closeBlurRun;
    let attempts = closeBlurAttempts;

    const tryBlur = () => {
      if (run !== closeBlurRun || drawer.hasAttribute("open")) return;

      const activeTrigger = getTransparentHeaderTrigger(document.activeElement);

      if (activeTrigger && activeTrigger === openedByPointerTrigger) {
        clearTriggerFocus(activeTrigger);
      }

      if (attempts === 0) {
        if (resetOnDone) clearOpenInput();
        return;
      }

      attempts -= 1;
      window.setTimeout(tryBlur, closeBlurInterval);
    };

    window.setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(tryBlur);
      });
    });
  };

  const queueCloseFocusCleanup = (resetOnDone = false) => {
    blurReturnedPointerTrigger(resetOnDone);
  };

  const cleanupReturnedFocus = (target) => {
    if (!openedByPointer || !openedByPointerTrigger || drawer.hasAttribute("open")) return;

    const trigger = getTransparentHeaderTrigger(target);
    if (trigger && trigger === openedByPointerTrigger) {
      requestAnimationFrame(() => {
        if (document.activeElement === trigger && !drawer.hasAttribute("open")) {
          clearTriggerFocus(trigger);
        }
      });
    }
  };

  document.addEventListener("pointerdown", notePointerOpen, true);
  document.addEventListener("mousedown", notePointerOpen, true);
  document.addEventListener("touchstart", notePointerOpen, true);
  document.addEventListener("keydown", noteKeyboardOpen, true);
  document.addEventListener("focusin", (event) => cleanupReturnedFocus(event.target), true);
  drawer.addEventListener("dialog:afterClose", () => queueCloseFocusCleanup(true));

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "open") {
        const wasOpen = mutation.oldValue !== null;
        const isOpen = drawer.hasAttribute("open");

        if (!wasOpen && isOpen) {
          markOpenInput();
          queueFocus();
        }

        if (wasOpen && !isOpen) {
          queueCloseFocusCleanup();
        }
      }
    }
  });

  observer.observe(drawer, { attributes: true, attributeFilter: ["open"], attributeOldValue: true });

  if (drawer.hasAttribute("open")) {
    queueFocus();
  }
})();
