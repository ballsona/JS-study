const bookForm = document.querySelector(".js-bookForm"),
bookList = document.querySelector(".js-bookList"),
titleInput = bookForm.querySelector(".bookTitle"),
authorInput = bookForm.querySelector(".bookAuthor"),
commentArea = bookForm.querySelector(".bookComment"),
button = bookForm.querySelector(".btn");
count = document.querySelector(".count_text")

const BOOK="book"; 
const SEARCH="search";
let books = [];

function paintBook(title,author,comment){
   const li = document.createElement("li");
   const span = document.createElement("span");
   const searchBtn = document.createElement("button");
   const newId = books.length+1;
   searchBtn.innerText="🔎";
   searchBtn.addEventListener("click",function(){
    localStorage.setItem(SEARCH,title);
    location.href="search2.html";
});
   span.innerText= ` ${title} / ${author} / ${comment}`;
   li.appendChild(searchBtn);
   li.appendChild(span);
   li.id= newId;
   bookList.appendChild(li);
   const bookObj = {
       title:title,
       author:author,
       comment:comment,
       id:newId
   }
   books.push(bookObj);
   count.innerText=`당신이 읽은 책의 수는 총 ${books.length}권 입니다.`;
   saveBooks();
}


function saveBooks(){
    localStorage.setItem(BOOK,JSON.stringify(books));
}

function handleSubmit(event){
    event.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const comment = commentArea.value;
    if(title !== "" && author !== "" && comment !== ""){
        paintBook(title,author,comment);
        button.innerText="입력"
    } else{
        button.innerText="모두 다 적으셈."
    }
    
    titleInput.value="";
    authorInput.value="";
    commentArea.value="";
}

function loadBooks(){
    const loadBook = localStorage.getItem(BOOK);
    if(loadBook !== null){
        const parseBook = JSON.parse(loadBook);
        parseBook.forEach(function(books){
            paintBook(books.title,books.author,books.comment);
        })
    }
   
}

function init(){
    loadBooks();
    button.addEventListener('click',handleSubmit);
    console.log(200);
}

init();