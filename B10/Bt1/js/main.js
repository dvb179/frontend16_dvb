// handle click toggle addTask
ELENMENT_BUTTON.addEventListener('click', () => {
    addTask(toggleForm)
    console.log(1);
    toggleForm = !toggleForm
});

// handle click addTask button
ELENMENT_INPUT_SUBMIT.addEventListener('click', () => {

// set id to arr
    let ramdomID = String(Date.now())
// set name to arr
    let nameList = ELENMENT_INPUT_NAME.value

    addItemToDOM(ramdomID, nameList)
    addItemToArr(ramdomID, nameList)
    ELENMENT_INPUT_NAME.value = '';

});


//ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let id = makeid(15)
    let name = ELEMENT_FORM_INPUT_NAME.value
    let level = ELEMENT_FORM_INPUT_LEVEL.value

    arrData.push({id,name,level})
    console.log(arrData);
    ShowData()
})

