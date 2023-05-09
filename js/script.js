// swiper
new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  autoplay: {
    delay: 2400,
  },

  speed: 1800,

  effect: 'fade',

  fadeEffect: {
    crossFade: true
  },

  allowTouchMove: false,
});


// steps
document.querySelectorAll('.steps__tab').forEach(function (stepsTab) {
  stepsTab.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.steps__tab').forEach(function (btn) {
      btn.classList.remove('steps__tab_active')
    });
    e.currentTarget.classList.add('steps__tab_active');

    document.querySelectorAll('.step__article').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('step__article_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('step__article_active');
  });
});


// accordion
$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
  icons: false,
});


// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger_active');
    menu.classList.remove('menu_active');
    document.body.classList.remove('stop-scroll');
  })
})


// search
let searchOpen = document.querySelector('.search-button_open');
let searchField = document.querySelector('.search-field');
let searchClose = document.querySelector('.search-button_close');

searchOpen.addEventListener('click',
  function () {
    searchField.classList.toggle('search-field_active');
  });

searchClose.addEventListener('click',
  function () {
    searchField.classList.remove('search-field_active')
  });
