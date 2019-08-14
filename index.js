document.querySelector("form").addEventListener("submit", addToDo);
    

function addToDo(event) {
    event.preventDefault();
    let toDo = document.createElement("li");
    toDo.innerText = document.getElementById("item").value;
    let list = document.querySelector("ul").appendChild(toDo);
} 
