const addTask = (open = true) => {
    if (open) {
        TAG_FORM.removeAttribute('hidden')
    } else {
        TAG_FORM.setAttribute('hidden', true)
    }
    
}