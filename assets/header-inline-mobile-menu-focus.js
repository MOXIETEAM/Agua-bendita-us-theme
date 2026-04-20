(() => {
  const drawer = document.getElementById("menu_mobile");

  if (!drawer) return;

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

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "open" && drawer.hasAttribute("open")) {
        queueFocus();
      }
    }
  });

  observer.observe(drawer, { attributes: true, attributeFilter: ["open"] });

  if (drawer.hasAttribute("open")) {
    queueFocus();
  }
})();
