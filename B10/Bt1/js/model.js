// toggle addTask
const addTask = (open = true) => {
    if (open) {
        ELENMENT_INPUT.removeAttribute('hidden')
        ELENMENT_BUTTON.style.backgroundColor = 'red'
    } else {
        ELENMENT_INPUT.setAttribute('hidden', true)
        ELENMENT_BUTTON.style.backgroundColor = '#46b8da'
    }

}

// addTask
console.log(ELENMENT_INPUT_NAME.value);