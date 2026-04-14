(function () {
  if (window.__hdtSizeChartInit) return;
  window.__hdtSizeChartInit = true;

  function onUnitClick(event) {
    var unitButton = event.target.closest('button[data-size-chart-unit]');
    if (!unitButton) return;

    var unit = unitButton.getAttribute('data-size-chart-unit');
    if (!unit) return;

    var unitTab = unitButton.closest('[data-size-chart-units]');
    if (!unitTab) return;

    unitTab.querySelectorAll('button[data-size-chart-unit]').forEach(function (button) {
      button.setAttribute('aria-current', button === unitButton ? 'true' : 'false');
    });

    var panels = unitTab.parentElement && unitTab.parentElement.querySelector('[data-size-chart-panels]');
    if (!panels) return;

    panels.querySelectorAll('[data-size-chart-panel]').forEach(function (panel) {
      var isActive = panel.getAttribute('data-size-chart-panel') === unit;
      if (isActive) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
    });
  }

  document.addEventListener('click', onUnitClick);
})();

