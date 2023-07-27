export default {
  activeMode: 'active--mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  accParrent: [...document.querySelectorAll("[data-accordion-init]")],
  // selectParrent: [...document.querySelectorAll("[data-select]")],
  // tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  modalsButtonMode: [...document.querySelectorAll("[data-mode-modal]")],
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  // customSelect: [...document.querySelectorAll("[data-select]")],
  // burger: document.querySelector('.header .burger'),

  footer: document.querySelector("footer"),
  header: document.querySelector(".header"),

  mainLinks: [...document.querySelectorAll('.main-nav__link')],
  accItems: document.querySelectorAll('.university-list__item'),

  // ----------------------
  reviewsSlider: document.querySelector('.reviews-slider'),
  expertSlider: document.querySelector('.expert-slider'),
  worksSlider: document.querySelector('.works-section__slider'),
  formText: document.querySelector('.form-section__timer-bottom'),
  // observerSectons: [...document.querySelectorAll('.observer-sec')],






  // default variables

  // passForm: [...document.querySelectorAll('.password-form__label')],
  // parrentBuffer: [...document.querySelectorAll('.buffer')],
  mobileMenu: document.querySelector('.main-nav'),
  mainLinks: [...document.querySelectorAll('.main-nav a')],
  burger: document.querySelector('.burger'),
}





