const apikey = "0e9368895bc91651810463e9926398fe";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let city1 = document.querySelector('.city');
let temp = document.querySelector('.temp');
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather-icon");

async function checkwheather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }

    else {
        const data = await response.json();
        city1.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + ` <sup>o</sup>C`;
        document.querySelector('.percent').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + " Km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}
searchbtn.addEventListener("click", () => {
    checkwheather(searchbox.value);
})