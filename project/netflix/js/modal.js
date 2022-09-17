

const handleChangeSlider = (dir) => {
    if (dir === 1) {
        index++;
        console.log(index);
        if (index >= SLIDER_ITEM_LENGTH) {
            positionX = SLIDER_ITEM_WIDTH
            index = 0
        }
        positionX = positionX - SLIDER_ITEM_WIDTH;
        SLIDER_MAIN.style = `transform: translateX(${positionX}px)`

    } else if (dir === -1) {
        console.log('prev')
        index--;
        console.log(index);
        if (index < 0) {
            index = 0
            return
        }
        positionX = positionX + SLIDER_ITEM_WIDTH;
        
        SLIDER_MAIN.style = `transform: translateX(${positionX}px)`
        

    }
}