import refs from './refs.js';
import { convertMs, addLeadingZero } from './format-time.js';

function addTimer(timer, htmlObj) {
  Object.keys(htmlObj).forEach((key) => {
    htmlObj[key].textContent = timer[key];
  });
}

const yearEl = document.querySelector('[data-year]');
export function timer() {
  let currentYear = new Date().getFullYear();
  let newYear = new Date(currentYear, 11, 31, 23, 59, 60).getTime();
  yearEl.textContent = currentYear;
  let timer = convertMs(newYear - Date.now());
  let formatedTimer = addLeadingZero(timer);
  addTimer(formatedTimer, refs);
}
