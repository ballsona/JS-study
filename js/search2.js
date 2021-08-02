const search2 = localStorage.getItem("search");
const resultList = document.querySelector(".resultList");

const REST_API_KEY="87ab8b41e086c8f033987f97917e6c44";

function searchBook2(){
    const title =document.querySelector(".searchTitle");
    title.innerText=search2;

    axios.get("https://dapi.kakao.com/v3/search/book?target=title",
        {
            params:{
                query:search2
            },
            headers:{
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        }).then(res=>{
            res.data.documents.forEach(res=>{
                const li = document.createElement("li");
                const divInfo = document.createElement("div");
                const divInfo2 = document.createElement("div");
                const div1 = document.createElement("div");
                const div2 = document.createElement("span");
                const div3 = document.createElement("span");
                const div4 = document.createElement("div");
                const div5 = document.createElement("div");

                const errImage = new Image;
                errImage.src="css/image/noImage.png";

                div1.innerHTML= `<img src="${res.thumbnail}" onerror=${errImage} />`;
                div1.className="divImage";

                div2.innerText=res.title;
                res.authors.forEach(i=>{div3.innerText+=i;});
                div4.innerText=res.contents;
                div4.className="divContent";
                div5.innerText=res.url;
                div5.className="divUrl"

                divInfo2.append(div2,div3);
                divInfo.append(div1,divInfo2);  
                divInfo.className="divInfo";
                divInfo2.className="divInfo2";
                
                li.append(divInfo,div4,div5);
                li.className="searchList";
                

                resultList.appendChild(li);
                
            })
            console.log(res.data.documents);
        }).catch(err=>console.log(err));
}

searchBook2();