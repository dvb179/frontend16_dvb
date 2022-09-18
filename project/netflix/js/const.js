const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const BTN_PREV = $('.slider-prev');
const BTN_NEXT = $('.slider-next');
const SLIDER_MAIN = $('.slider-main');
const SLIDES_DOT = $$('.slider-dot-item');
const SLIDER_ITEM = $$('.slider-item');
const SLIDER_ITEM_WIDTH = SLIDER_ITEM[0].offsetWidth;
const SLIDER_ITEM_LENGTH = SLIDER_ITEM.length; 
let positionX = 0;
let counter = 0
