import * as utils from './fetchFunctions.js';
const searchBox = document.getElementById("searchBox");
const apiKey = '580e6e590b5905cefa8e2393dc148dd9';
const unitType = 'metric';
let lang = 'en';

//get current location function
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unitType}&lang=${lang}`;
    utils.fetchWeather(url);
})

//display values for seach
document.getElementById("search").addEventListener('click', () => {
    const citynName = searchBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citynName}&appid=${apiKey}&units=${unitType}&lang=${lang}`;
    utils.fetchWeather(url);
    setTimeout(() => {
        searchBox.value = ""
    }, 500);
})


