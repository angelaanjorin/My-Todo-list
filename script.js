const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-button").addEventListener("click", addTask);

function addTask(){
    if(inputBox.value == ""){
        alert("Please write your task!!!")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML = "<i class='fa-solid fa-trash'></i>"
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value=""
    //Savedata()
}