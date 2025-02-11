import { timer } from './js/timer.js';

setInterval(timer, 1000);

const titleEl = document.querySelector('.title');
const currentYear = new Date().getFullYear();
const nowDate = new Date();
const monthNow = nowDate.getMonth();
const body = document.querySelector('body');
const elements = document.querySelectorAll('[data="season"]');

const img = {
  autumn: './img/autumn.jpg',
  summer: './img/summer.jpg',
  spring: './img/spring.jpg',
  winter: './img/winter.jpg',
  newYear: './img/new-year.jpg',
};

if (nowDate.getMonth() === 11 && nowDate.getDate() === 31) {
  body.style.backgroundImage = `url(${img.newYear})`;
  elements.forEach((element) => {
    element.classList.add('new-year');
  });
  titleEl.textContent = `Already today New ${currentYear} Year! We celebrate!`;
} else if (monthNow === 0 || monthNow === 1 || monthNow === 11) {
  body.style.backgroundImage = `url(${img.winter})`;
  elements.forEach((element) => {
    element.classList.add('winter');
  });
} else if (monthNow === 2 || monthNow === 3 || monthNow === 4) {
  body.style.backgroundImage = `url(${img.spring})`;
  elements.forEach((element) => {
    element.classList.add('spring');
  });
} else if (monthNow === 5 || monthNow === 6 || monthNow === 7) {
  body.style.backgroundImage = `url(${img.summer})`;
  elements.forEach((element) => {
    element.classList.add('summer');
  });
} else if (monthNow === 8 || monthNow === 9 || monthNow === 10) {
  body.style.backgroundImage = `url(${img.autumn})`;
  elements.forEach((element) => {
    element.classList.add('autumn');
  });
}
