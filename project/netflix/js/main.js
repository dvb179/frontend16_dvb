// CLICK BTN
BTN_NEXT.addEventListener('click', () => {
    setTimeout(() => {
        handleChangeSlider(1)

    }, 300)
});


BTN_PREV.addEventListener('click', () => {
    handleChangeSlider(-1)
});

// CLICK DOT
SLIDES_DOT.forEach(item => item.addEventListener('click', (e) => {
    S('.slider-dot-item.active').classList.remove('active');
    item.classList.add('active')

    const slideIndex = parseInt(e.target.dataset.index);
    counter = slideIndex;
    console.log(slideIndex);

    positionX = -1 * counter * SLIDER_ITEM_WIDTH;
    SLIDER_MAIN.style = `transform: translateX(${positionX}px)`;
}));


// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
$(".image-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
});
