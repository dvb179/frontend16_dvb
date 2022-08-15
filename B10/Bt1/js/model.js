// toggle addTask
const addTask = (open = true) => {
    if (open) {
        ELENMENT_INPUT.removeAttribute('hidden')
        ELENMENT_BUTTON.style.backgroundColor = 'red'
    } else {
        ELENMENT_INPUT.setAttribute('hidden')
        ELENMENT_BUTTON.style.backgroundColor = '#46b8da'
    }

}
// Show Data
const ShowData = () => {
    let xhtml = '';
    arrList.forEach((item, index) => {
        let id = item.id
        xhtml +=
            `<tr>
				<td class="text-center">${index + 1}</td>
				<td>${item.name}</td>
				<td class="text-center"><span class="label label-info">Medium</span></td>
					<td>
					    <button type="button" class="btn btn-warning" onclick="showEditInform('${id}')">Edit</button>
					    <button type="button" class="btn btn-danger onclick="deleteItem('${id}')">Delete</button>
					</td>
			</tr>`
    })

    ELEMENT_CONTENT.innerHTML = xhtml
}

// showEditInform
const showEditInform = (id) => {
    let item = getItemById(id)
    addTask(true)
    showItemForm(item)
    console.log(item);
}

// showItemForm
const showItemForm = (item) => {
    ELENMENT_INPUT_NAME.value = item.name
    ELENMENT_INPUT_ID.value = item.id
}

// deleteItem
const deleteItem = (id) => {

}

// getItemId
const getItemById = (id) => {
    return arrList.find(item => item.id == id);
}

//  create ID 
const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

