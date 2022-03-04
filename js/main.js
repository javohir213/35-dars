var elForm = document.querySelector(".form");
var elInput = document.querySelector("#input");
var elButton = document.querySelector(".form__button");
var elList = document.querySelector(".form__list");
var todos = [];


elForm.addEventListener("submit" , function(evt){
  evt.preventDefault()

  var inputValue = elInput.value.trim();

  elInput.value = "";

  var todo = {
    number: todos.length + 1,
    title: ". " + inputValue ,
  };

  todos.push(todo);

  elList.innerHTML = null;

  for (var item of todos) {
    
    var newLi = document.createElement("li");
    newLi.classList.add("form__item");
    
    newLi.textContent = item.number + item.title;
    
    elList.appendChild(newLi);
  }

});


