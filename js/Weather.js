const API_KEY = "9077e05580750e5d7f4810a669db3ab6";
const WEATHER_API="https://api.openweathermap.org/data/2.5/weather?q=Seoul&"

const weather = document.querySelector(".js-weather");

const COORD_LOC = {
    "latitude" : "37.58",
    "longitude" : "127",
};

if ('geolocation' in navigator) {
    /* 위치 정보 사용 가능. */
    alert('위치 정보 사용 가능');
    navigator.geolocation.getCurrentPosition(position => {
        COORD_LOC.latitude = position.coords.latitude;
        COORD_LOC.longitude = position.coords.longitude;
    })
} else {
    /* 위치 정보 사용 불가능 */
    alert('위치 정보 사용 불가능');
    // default : 서울, 대한민국 위치
    COORD_LOC.latitude = "37.58";
    COORD_LOC.longitude = "127";
}

function getWeather(latitude, longitude) {
    // today 날씨 정보
    fetch(`${WEATHER_API}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(response => {
            return response.json(); //Promise를 반환
        }).then(json => {
            const weather_main= json.weather[0].description;
            weather.innerHTML=weather_main;
        }); //서버에서 주는 데이터가 json형식으로 반환됨. //fetch를 사용하려면 2번 거쳐야해
}

function load() {
    getWeather(COORD_LOC.latitude, COORD_LOC.longitude);
}

load();


