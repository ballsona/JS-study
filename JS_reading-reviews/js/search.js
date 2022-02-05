const searchForm = document.querySelector(".js-search")
const searchInput = searchForm.querySelector(".search_text");
const button = searchForm.querySelector(".searchBtn");

const REST_API_KEY="87ab8b41e086c8f033987f97917e6c44";

const SEARCH="search";

function init(){
    button.addEventListener("click",function(event){
        event.preventDefault();
        const searchText = searchInput.value;
        localStorage.setItem(SEARCH,searchText);
        location.href="search2.html";
    })
}

init();