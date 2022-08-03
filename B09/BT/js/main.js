const HANDLE = document.getElementById('box')

let clickBox = false;
HANDLE.addEventListener("click", function(){
    if (clickBox) {
        HANDLE.style.backgroundColor = "red"
    } else {
        HANDLE.style.backgroundColor = "black";
        
    }
    clickBox = !clickBox
});

