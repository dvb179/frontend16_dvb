ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    let id = ELEMENT_INPUT_HIDDEN.value ? ELEMENT_INPUT_HIDDEN.value: makeid(20)
    let item = {id, name, level}

    if(name === '') return -1
    
    if(!name) {
        
        addItem(item)
    }else {
        console.log(123);
    }



    showData()
    handleToggleForm(false)
})

showData()