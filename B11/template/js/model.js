const handleToggleForm = (open = true) => {
    if (open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    } else {
        ELEMENT_FORM_INPUT.setAttribute('hidden', true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK'
    }
}
// Show Data
const showData = () => {
    let xhtml = '';
    arrData.forEach((item, index) => {
        let id = item.id
        xhtml += ` <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center"><span class="label label-danger">${ELEMENT_FORM_INPUT_LEVEL.value}</span></td>
            <td>
                
                <button type="button" class="btn btn-warning" onclick="ShowformEditItem('${id}')">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${id}')" >Delete</button>
            </td>
        </tr>`
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}

// Create Id
const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// add
const addItem = (item) => {
    arrData.push(item)
}

// Delete
const deleteItem = (id) => {
    if (confirm('ban chac chu')) {

        arrData = arrData.filter(item => item.id != id)
        console.log(arrData);
        showData()
    }
}
// show

const ShowformEditItem = (id) => {
    handleToggleForm()
    let item = arrData.find(item => item.id == id)
    ELEMENT_FORM_INPUT_NAME.value = item.name
    ELEMENT_FORM_INPUT_LEVEL.value = item.level
    ELEMENT_FORM_INPUT_HIDDEN.value = item.id
    console.log(item);

   
}



// edit 
const editItem = (item) => {
    arrData = arrData.map(i => {
        return i.id == item.id ? item : i
        // if (item.id == i.id) {
        //     console.log(item);
        // }
        // return i
    })
    setItemLocal()
    showData()
    resetForm()
}

// reset

const resetForm = () => {
    ELEMENT_FORM_INPUT_NAME.value = ""
    ELEMENT_FORM_INPUT_LEVEL.value = "small"
    ELEMENT_FORM_INPUT_HIDDEN.value = ""
}


// SET LOCAL
const setItemLocal = () => {
    localStorage.setItem("keyItem", JSON.stringify(arrData))


}

//  get local

const getLocalItem = () => {
    let items = JSON.parse(localStorage.getItem('keyItem'))
    items = items ? items : []

    return items
}


