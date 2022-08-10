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
					    <button type="button" class="btn btn-warning">Edit</button>
					    <button type="button" class="btn btn-danger onclick="deleteItem('${id}')">Delete</button>
					</td>
			</tr>`
    })

    ELEMENT_CONTENT.innerHTML = xhtml
}


// delete
const deleteItem = (id) => {
    console.log(id);
}

// add array



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


