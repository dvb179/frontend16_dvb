BTN_NEXT.addEventListener('click', e => {
    handleChangeSlider(1)
    setTimeout(() => {
        
    },300)
    console.log(SLIDER_ITEM_WIDTH);
});


BTN_PREV.addEventListener('click', e => {
    handleChangeSlider(-1)
    console.log();
});