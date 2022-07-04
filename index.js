
let form = document.querySelector("form");
let text = document.getElementById("text");
let todoCon = document.querySelector(".todo-con");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addtodo();
})
 let todos=JSON.parse(localStorage.getItem("todos"));
 if(todos){
 todos.forEach(element=>{
addtodo(element)
 });
 }
function addtodo(){
    let todoColl = document.createElement("div");
    let todotext=text.value;
    todoColl.innerHTML=`
    <div class="todo-li">
            <div class="check"><img src="./Images/icon-check.svg" alt=""></div>
            <p class="ptag">${todotext}</p>
            <button class="close"><img src="./Images/icon-cross.svg" alt=""></button>
            </div>
            <div class="hr"></div>
            `
        todoCon.appendChild(todoColl)
} 
