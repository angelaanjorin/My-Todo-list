onload = todoMain;

function todoMain(){
  let inputElem,
      ulElem;

  getElements();
  addListeners();

  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];
  }

  function addListeners(){
    inputElem.addEventListener("change", onChange, false);
  }

  function onChange(event){
    let inputValue = inputElem.value;
    inputElem.value = "";

    let liElem = document.createElement("li");

    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    liElem.appendChild(checkboxElem)

    let textElem = document.createElement("span");
    textElem.innerText = inputValue
    liElem.appendChild(textElem);

  
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-symbols-outlined";

    spanElem.addEventListener("click", deleteItem, false);

    liElem.appendChild(spanElem);
    ulElem.appendChild(liElem);
    
    function onclick(){
        this.style.textDecoration = "line-through"
    }
   

    function deleteItem(){
        liElem.remove();
    }
  }
}