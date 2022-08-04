let addToDoButton = document.getElementById("addTodo");
let inputField = document.getElementById("inputField");
let textList = document.getElementById("listText")

addToDoButton.addEventListener("click", function() {
    if (inputField.value == "") {
        return
    }
    let paragraph = document.createElement('li')
    
    paragraph.innerText = inputField.value;
    textList.appendChild(paragraph);

    inputField.value = ""
    
})