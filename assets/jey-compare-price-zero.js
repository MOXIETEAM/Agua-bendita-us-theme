/* jey-compare-price-zero.js */
(function () {
  const MONEY_SEL = '.hdt-money';

  function toNumber(txt) {
    let s = (txt || '').trim().replace(/\s/g, '').replace(/[^\d.,-]/g, '');
    const hasDot = s.includes('.'), hasCom = s.includes(',');
    if (hasDot && hasCom) {
      if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
      else s = s.replace(/,/g, '');
    } else if (hasCom) { s = s.replace(',', '.'); }
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  }

  function stripZeros(el) {
    if (!el) return;
    const raw = (el.textContent || '').trim();
    // Detecta separador decimal (.,)
    const m = raw.match(/([.,]\d{2})\s*$/);
    if (m && (m[0] === '.00' || m[0] === ',00')) {
      el.textContent = raw.slice(0, -3); // quita los dos decimales
    }
  }

  function updatePrices(root = document) {
    root.querySelectorAll('.hdt-price__container').forEach((box) => {
      const cmpWrap = box.querySelector('hdt-compare-at-price');
      const cmpEl   = cmpWrap ? cmpWrap.querySelector(MONEY_SEL) : null;
      const priceEl = box.querySelector('hdt-price ' + MONEY_SEL);
      if (!priceEl) return;

      // formateo de decimales (.00) en ambos
      stripZeros(priceEl);
      stripZeros(cmpEl);

      const priceVal = toNumber(priceEl.textContent);
      const cmpVal   = toNumber(cmpEl ? cmpEl.textContent : '');

      // hay oferta solo si compare > price (con pequeña tolerancia)
      const onSale = cmpVal > priceVal + 0.001;

      if (onSale) {
        priceEl.classList.add('jey-price--sale');
        if (cmpWrap) { cmpWrap.removeAttribute('hidden-important'); cmpWrap.style.display = ''; }
      } else {
        priceEl.classList.remove('jey-price--sale');
        if (cmpWrap) { cmpWrap.setAttribute('hidden-important', ''); cmpWrap.style.display = 'none'; }
      }
    });
  }

  // Primera pasada
  document.addEventListener('DOMContentLoaded', () => updatePrices());

  // Recalcula cuando cambian variantes / se actualiza el slider / se carga una sección
  ['change', 'theme:variant:change', 'theme:slider:updated', 'shopify:section:load']
    .forEach(evt => document.addEventListener(evt, () => updatePrices()));

  // Observa cambios de texto en los contenedores de precio
  const mo = new MutationObserver(() => updatePrices());
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hdt-price__container').forEach(n =>
      mo.observe(n, { childList: true, subtree: true, characterData: true })
    );
  });
})();
