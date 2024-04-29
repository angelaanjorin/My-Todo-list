
    const inputBox = document.getElementById("input-box")
    const dateInput = document.getElementById("date-input")
    const addButton = document.getElementById("add-button")
    const listContainer = document.getElementById("list-container")

addButton.addEventListener("click", addTask, false);
addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        addTask()
    }
})

function addTask(){
   console.log("addtask");
}