ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    if(id == '') {
        let id      = gitmakeid(20)
        add
    }else {
        edit
    }
    arrData.push({id,name,level})
    showData()
    handleToggleForm(false)
})

showData()