const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image); //이미지를 body 앞에 추가한다. 
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init(){
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();