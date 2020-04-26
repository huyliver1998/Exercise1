const form = document.querySelector('#my-form');
const todoText = document.querySelector('.textTodo');
const btn = document.querySelector('.btn');
const list = document.querySelector('#listTodo');

function appendItem (todo){
    let li = document.createElement('li');
    if(todo !== ''){
        li.innerHTML= `
            <input type = "checkbox" class = "ckbox"></input>
            <span> ${todo} </span>
            <span class="remove">X</span>
        `
        listTodo.appendChild(li);
        removeItem();
    }
    
}

document.addEventListener('DOMContentLoaded', () =>{
    getTodo().map((todo) =>{
        appendItem(todo);
    })
    change_checkbox();
});


btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(todoText.value !== ''){
        appendItem(todoText.value);
        addTodo(todoText.value);
    }
    todoText.value = '';
})


function getTodo() {
    let todos = [];
    if(localStorage.getItem('todoList') === null){
    todos = []
}else{
    todos = JSON.parse(localStorage.getItem('todoList'));
}

return todos;
}

function addTodo(todo){
    let todos = getTodo();
    todos.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todos));
}

var flag = true;
function removeItem(){
    var btn = document.getElementsByClassName("remove");
    for(var i = 0; i < btn.length; i ++){
        btn[i].addEventListener("click",function(){
            removeFromlocalStorage(i);
            this.parentElement.remove();
        })
    }
}
function removeFromlocalStorage(i)
{
    if(flag){
        console.log(i-1);
        var temp = JSON.parse(localStorage.getItem("todoList"));
        temp.splice(i-1,1);
        localStorage.setItem('todoList',JSON.stringify(temp));
        flag = false;
        location.reload()
    }  
}

function setTodo(todo){
    let todos = [];
    todos = getTodo();
    todos.push(todo);
    localStorage.setItem('todo',JSON.stringify(todos));
}

// checkbox
function change_checkbox(){
    var checkbox = document.getElementsByClassName("ckbox");

    for(var i = 0; i < checkbox.length; i++)
    {
        checkbox[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.style.background = 'orange';
            } else {
                // Checkbox is not checked..
                this.parentElement.style.background = 'blue';
            }
        });
    }
}
