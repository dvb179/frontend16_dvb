const ELEMENT_BOX = document.getElementsByClassName('box')


let maxHeight = 0
for (let i = 0; i < ELEMENT_BOX.length; i++) {
    if (maxHeight < ELEMENT_BOX[i].offsetHeight)

        maxHeight = ELEMENT_BOX[i].offsetHeight

}
console.log(maxHeight);


for (let j = 0; j < ELEMENT_BOX.length; j++) {

    ELEMENT_BOX[j].style.height = maxHeight + 'px'
    j % 2 === 0 ? ELEMENT_BOX[j].style.backgroundColor = 'red' : ELEMENT_BOX[j].style.backgroundColor = 'green'


    
}

/* let color = ELEMENT_BOX[j].style.backgroundColor */