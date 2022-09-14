const searchItem = () => {
  let input = document.getElementsById("form-input").value;
  input = input.toLowerCase();
  let item = document.getElementsByClassName("item");

  for (let i = 0; i < item.length; i++) {
    if (!item[i].innerHTML.toLowerCase().includes(input)) {
      item[i].style.display = "none";
    } else {
      item[i].style.display = "block";
    }
  }
};

searchItem();
