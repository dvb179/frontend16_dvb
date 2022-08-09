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
const addItemToDOM = (ramdomID, nameList) => {
    const tbody = document.querySelector('tbody')
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    tbody.setAttribute('data-id', ramdomID)
    tr.innerText = nameList
    td.innerText = nameList
    tbody.appendChild(tr)


}



const addItemToArr = (ramdomID, nameList) => {
    arrList.push({ ramdomID, nameList })
    console.log(arrList);
}
console.log(addItemToDOM());