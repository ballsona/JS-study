/*const form = document.querySelector(".js-name"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER = "currentUser";
const SHOWING = "showing";

//로컬 저장소에 이름 저장 
function saveName(text) {
    localStorage.setItem(USER, text);
}

//이름 적고 enter치면 불러지는 함수
function handleSubmit(event) {
    event.preventDefault(); //새로고침 방지
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


//이름적고 enter누르면 handleSubmit가불러짐 
function askForname() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit); //button or  input type="submit"이거나, enter를 눌렀을떄
}

//enter치면 greeting이 활성화되고, 텍스트가 변경된다.
function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;

}

function loadName() {
    const currentUser = localStorage.getItem(USER);
    if (currentUser === null) {
        askForname();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();

/*새로고침하면 USER localStorage 비워 
window.addEventListener('beforeunload', () => {
    localStorage.removeItem(USER);
});*/


const nameContainer = document.querySelector(".js-name");

function paintName(name){
    nameContainer.innerHTML=""; //html 초기화
    const title = document.createElement("span");
    title.className="name_text";
    title.innerText= `Hello ${name}`;
    nameContainer.appendChild(title);

}

function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("name",value);
    paintName(value);
}

function paintInput(){
    const input = document.createElement("input");
    input.placeholder="What's your name?";
    input.type="text";
    input.className="name_input";

    const form = document.createElement("form");
    form.appendChild(input);
    form.addEventListener("submit",handleSubmit);

    nameContainer.appendChild(form);
}

function loadName(){
    const name = localStorage.getItem("name");
    if (name === null){
        paintInput();
    } else{
        paintName(name);
    }
}

function init(){
    loadName();
}

init();