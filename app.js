const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
