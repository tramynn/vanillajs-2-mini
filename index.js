document.querySelector("form").addEventListener("submit", addToDo);
    

function addToDo(event) {
    event.preventDefault();
    let item = document.createElement("li");
    item.innerText = document.getElementById("item").value;
    item.addEventListener("click", completeToDo);

    let button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", removeToDo);
    item.append(button);

    let list = document.querySelector("ul");
    list.appendChild(item);
} 

function removeToDo(event) {
    // since button is child of the item, use code to remove entire list
    event.target.parentNode.remove();
    // let message = document.getElementById("completed-message").innerHTML;
    // alert(message);
}

function completeToDo(event) {
    let value = event.target.getAttribute("aria-checked");
    if (value !== "true") {
        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
    setTimeout(function(){
        let message = document.getElementById("completed-message").innerHTML;
        alert(message);
    }, 2000);
    removeToDo();
}