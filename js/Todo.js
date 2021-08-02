const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODO = "todos"; //불변변수
let todos = [];  //가변변수

function deleteTodo(event) {
    const btn = event.target; //삭제하려는 이벤트 객체
    const li = btn.parentNode;
    todoList.removeChild(li); //객체를 담은 노드를 지워버린다
    const cleanTodos = todos.filter(function (todo) {
        return todo.id !== parseInt(li.id)
    });
    //filter(조건) : 조건에 맞는 값을 반환
    //event를 담은 li 뺀 모든 li를 담은애로 변환
    todos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODO, JSON.stringify(todos))
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1; //처음엔 0이니까 1로 시작 
    //누르면 delete시키는 버튼을 추가
    delBtn.innerText = "❌";
    delBtn.className="todo_button";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    //push(n) : 배열 맨 뒤에 n넣기
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value="";       
}

function loadTodos(){
    const loadTodos = localStorage.getItem(TODO);
    if(loadTodos !== null){
        const parseTodos = JSON.parse(loadTodos);
        parseTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit",handleSubmit);
}

init();