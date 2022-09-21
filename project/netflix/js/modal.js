// handle Click
const handleChangeSlider = (dir) => {
    if (dir === 1) {
        console.log(counter);
        if (counter >= SLIDER_ITEM_LENGTH - 1) {
            
            positionX = SLIDER_ITEM_LENGTH
            counter = -1;
        }
        positionX = positionX - SLIDER_ITEM_WIDTH;
        console.log(positionX);
        SLIDER_MAIN.style = `transform: translateX(${positionX}px)`
        counter++;

    } else if (dir === -1) {
        console.log('prev')

        if (counter <= 0) {
            return counter = 0
        }
        positionX = positionX + SLIDER_ITEM_WIDTH;
        
        SLIDER_MAIN.style = `transform: translateX(${positionX}px)`
        counter--;
        
    }
    S('.slider-dot-item.active').classList.remove('active');
    SLIDES_DOT[counter].classList.add('active');
}

// auto scroll
setInterval(() =>{
    counter++;
    if (counter >= SLIDER_ITEM_LENGTH) {
        positionX = SLIDER_ITEM_WIDTH
        counter = 0
    }
    console.log(counter);
    positionX = positionX - SLIDER_ITEM_WIDTH;
    SLIDER_MAIN.style = `transform: translateX(${positionX}px)`
    
   S('.slider-dot-item.active').classList.remove('active');
    SLIDES_DOT[counter].classList.add('active');

},7000);

document.querySelector('body').onscroll = () => {
    console.log(HEADER);
}