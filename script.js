const apiKey = "afc75aefc187629d2d1307273d6c360f"; 
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    // change city and country name
    document.querySelector(".city-name").innerHTML = data.name + ", " + data.sys.country;

    // change current temp and description
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".condition").innerHTML = data.weather[0].description;

    // change max and min temp
    document.querySelector(".max-temp").innerHTML = "H: " + Math.round(data.main.temp_max) + "°  |";
    document.querySelector(".min-temp").innerHTML = " L: " + Math.round(data.main.temp_min) + "°";

    // change wind and humidity
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
});
