const addTask = (open = true) => {
    if (open) {
        TAG_FORM.removeAttribute('hidden')
    } else {
        ADD_TASK.setAttribute('hidden')
    }
    
}