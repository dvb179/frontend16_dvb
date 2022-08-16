const ELEMENT_INPUT_NAME = document.getElementById('myInput')
const ELEMENT_INPUT_VALUE = document.getElementById('myUL')
const ELEMENT_INPUT_CLOSE = document.getElementsByName('li')

console.log(ELEMENT_INPUT_VALUE);



const newElement = () => {
    let li = document.createElement('li');
    let add = document.createTextNode(ELEMENT_INPUT_NAME.value)
    li.appendChild(add);

    if (ELEMENT_INPUT_NAME.value === '') {
        alert('Please enter a valid element name');
    } else {
        ELEMENT_INPUT_VALUE.appendChild(li)
    }
    ELEMENT_INPUT_NAME.value = '';
    console.log(ELEMENT_INPUT_CLOSE);
}

ELEMENT_INPUT_VALUE.addEventListener('click', () => {
    
});
