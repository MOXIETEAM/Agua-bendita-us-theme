(() => {
  const ROOT_SELECTOR = "[data-header-countdown-root]";
  const TIMER_SELECTOR = "[data-header-countdown-timer]";
  const intervals = new WeakMap();

  const parseInputDate = (value, fallbackTime) => {
    if (!value) return NaN;
    const normalized = value.trim().replace(/\//g, "-");
    const hasTime = /\d{1,2}:\d{2}/.test(normalized);
    const formatted = hasTime ? normalized : `${normalized} ${fallbackTime}`;

    const parts = formatted.match(
      /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2})(?::(\d{2}))(?::(\d{2}))?)?$/
    );

    if (!parts) return NaN;

    const year = Number(parts[1]);
    const month = Number(parts[2]) - 1;
    const day = Number(parts[3]);
    const hours = Number(parts[4] || 0);
    const minutes = Number(parts[5] || 0);
    const seconds = Number(parts[6] || 0);

    return new Date(year, month, day, hours, minutes, seconds).getTime();
  };

  const getDuration = (distance) => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const renderCountdown = (timer, values) => {
    const labels = ["days", "hours", "mins", "secs"];
    const numbers = [values.days, values.hours, values.minutes, values.seconds];

    timer.innerHTML = "";

    numbers.forEach((value, index) => {
      const timeItem = document.createElement("span");
      timeItem.className = "time-item";

      const timeNum = document.createElement("span");
      timeNum.className = "time-num";
      timeNum.textContent = String(value).padStart(2, "0");

      const timeLabel = document.createElement("span");
      timeLabel.className = "time-label";
      timeLabel.textContent = labels[index];

      timeItem.appendChild(timeNum);
      timeItem.appendChild(timeLabel);
      timer.appendChild(timeItem);
    });
  };

  const stopTimer = (timer) => {
    const timerId = intervals.get(timer);
    if (timerId) {
      clearInterval(timerId);
      intervals.delete(timer);
    }
  };

  const initTimer = (timer) => {
    stopTimer(timer);

    const fromValue = timer.getAttribute("data-date-from");
    const toValue = timer.getAttribute("data-date-to");
    const startAt = parseInputDate(fromValue, "00:00:00");
    const endAt = parseInputDate(toValue, "23:59:59");
    const root = timer.closest(ROOT_SELECTOR);

    if (Number.isNaN(startAt) || Number.isNaN(endAt) || startAt >= endAt) {
      if (root) root.style.display = "none";
      return;
    }

    const tick = () => {
      const now = Date.now();

      if (now < startAt || now > endAt) {
        stopTimer(timer);
        if (root) root.style.display = "none";
        return;
      }

      if (root) root.style.display = "";
      renderCountdown(timer, getDuration(endAt - now));
    };

    tick();
    intervals.set(timer, window.setInterval(tick, 1000));
  };

  const initIn = (scope = document) => {
    scope.querySelectorAll(TIMER_SELECTOR).forEach(initTimer);
  };

  document.addEventListener("DOMContentLoaded", () => initIn());
  document.addEventListener("shopify:section:load", (event) => initIn(event.target));
  document.addEventListener("shopify:section:unload", (event) => {
    event.target.querySelectorAll(TIMER_SELECTOR).forEach(stopTimer);
  });
})();
