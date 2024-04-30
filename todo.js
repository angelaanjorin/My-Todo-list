onload = todoMain;
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	//const inputBox = document.querySelector('#inputBox');
	})

	addBtn.addEventListener('submit', e => {
		e.preventDefault();
  
})

function todoMain(){
  let inputElem,
      dateInput,
      addBtn,
      todoList,
      ulElem;

  getElements();
  addListeners();
  //load();
  renderRow();

  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];
    addBtn = document.getElementById("addBtn")
    dateInput = document.getElementById("dateInput")
  }

  function addListeners(){
    inputElem.addEventListener("change", addEntry, false);
  }

  function addEntry(event){
    let inputValue = inputElem.value;
    inputElem.value = "";

    let dateValue = dateInput.value;
    dateInput.value = "";

    let obj = {
      id: 0,
      todo: inputValue,
      date: dateValue,
      done: false,

    };

    renderRow(obj);
    todoList.push(obj);

    function renderRow({todo: inputValue, date: dateValue,id, done}) {
    let liElem = document.createElement("li");

    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click",checkboxClickCallback, false);
    checkboxElem.dateset.id = id;   
    liElem.appendChild(checkboxElem)

    let textElem = document.createElement("p");
    textElem.innerText = inputValue
    liElem.appendChild(textElem);

  
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-symbols-outlined";

    spanElem.addEventListener("click", deleteItem, false);

    liElem.appendChild(spanElem);
    ulElem.appendChild(liElem);
  }

    
    function done(){
        textElem.classList.toggle ("strike")
    }
   

    function deleteItem(){
        liElem.remove();
    }
    function checkboxClickCallback(){

    }
  }
}