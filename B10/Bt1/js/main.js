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
    ELENMENT_INPUT_NAME.value = ''
});