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
    
    const td = document.createElement('td')
    tbody.setAttribute('data-id', ramdomID)
    td.innerText = nameList
    
    tbody.appendChild(td)


}



const addItemToArr = (ramdomID, nameList) => {
    arrList.push({ ramdomID, nameList })
    console.log(arrList);
}
console.log(addItemToDOM());


const handleToggleForm = (open = true) => {
    if(open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    }else {
        ELEMENT_FORM_INPUT.setAttribute('hidden' , true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK'
    }
}
// Show Data
const ShowData = () => {
    let xhtml = '';
    arrData.forEach((item , index) => {
        let id = item.id
        xhtml += ` <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center"><span class="label label-danger">High</span></td>
            <td>
                <button type="button" class="btn btn-warning">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem('${id}')" >Delete</button>
            </td>
        </tr>`
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}

// delete
const deleteItem = (id) => {
    console.log(deleteItem);
}

// add array



//  create ID 
const makeid = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


