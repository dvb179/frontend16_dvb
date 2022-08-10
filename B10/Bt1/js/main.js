// handle click toggle addTask
ELENMENT_BUTTON.addEventListener('click', () => {
    addTask(toggleForm)
    console.log(1);
    toggleForm = !toggleForm
});



ELENMENT_INPUT_SUBMIT.addEventListener('click', function () {
    let id = makeid(15)
    let name = ELENMENT_INPUT_NAME.value
    let level = ELENMENT_INPUT_LEVEL.value

    if (name == '') return -1

    arrList.push({ 'id': id, 'name': name, 'level': level })

    console.log(arrList);
    ShowData()
    ELENMENT_INPUT_NAME.value = ''
    ELENMENT_INPUT.setAttribute('hidden', true)
})
