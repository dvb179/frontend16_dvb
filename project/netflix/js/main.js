// CLICK BTN
BTN_NEXT.addEventListener('click', () => {
    handleChangeSlider(1)
    setTimeout(() => {

    }, 300)
});


BTN_PREV.addEventListener('click', () => {
    handleChangeSlider(-1)
    console.log();
});

// CLICK DOT
SLIDES_DOT.forEach(item => item.addEventListener('click', (e) => {
    $('.slider-dot-item.active').classList.remove('active');
    item.classList.add('active')

    const slideIndex = parseInt(e.target.dataset.index);
    counter = slideIndex;
    console.log(slideIndex);

    positionX = -1 * counter * SLIDER_ITEM_WIDTH;
    SLIDER_MAIN.style = `transform: translateX(${positionX}px)`;
}));
