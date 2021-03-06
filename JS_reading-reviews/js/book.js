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
   searchBtn.innerText="π";
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
   count.innerText=`λΉμ μ΄ μ½μ μ±μ μλ μ΄ ${books.length}κΆ μλλ€.`;
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
        button.innerText="μλ ₯"
    } else{
        button.innerText="λͺ¨λ λ€ μ μΌμ."
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