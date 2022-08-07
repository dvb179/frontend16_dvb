// handle click toggle addTask
ELENMENT_BUTTON.addEventListener('click', () => {
    addTask(toggleForm)
    console.log(1);
    toggleForm = !toggleForm
});

// handle click addTask button
ELENMENT_INPUT_SUBMIT.addEventListener('click', () => {
    
    arrList.push(`id:${ramdomNumber}`)
    arrList.push(`name:${ELENMENT_INPUT_NAME.value}`)
    arrList.push(`level:${ELENMENT_INPUT_LEVEL.value}`)
    console.log(arrList);
});