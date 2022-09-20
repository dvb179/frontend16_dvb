const S = document.querySelector.bind(document);
const SS = document.querySelectorAll.bind(document);

const HEADER = S('HEADER');
const BTN_PREV = S('.slider-prev');
const BTN_NEXT = S('.slider-next');
const SLIDER_MAIN = S('.slider-main');
const SLIDES_DOT = SS('.slider-dot-item');
const SLIDER_ITEM = SS('.slider-item');
const SLIDER_ITEM_WIDTH = SLIDER_ITEM[0].offsetWidth;
const SLIDER_ITEM_LENGTH = SLIDER_ITEM.length; 
let positionX = 0;
let counter = 0

