const searchBox = document.getElementById("searchBox");
const weatherIcon = document.getElementById("weather-icon");
const apiKey = '580e6e590b5905cefa8e2393dc148dd9';
const unitType = 'metric';
let lang = 'en';
const date = new Date;
const utcHour = date.getUTCHours();

//get current location function
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unitType}&lang=${lang}`;

    let localWeather = fetch(url);
    localWeather
        .then(
            res => res.json()
        )
        .then(
            data => {
                console.log(data);
                const weatherDescription = data.weather[0].main;
                document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
                document.querySelector('.location').textContent = data.name;
                const utcDifference = data.timezone / 3600;
                const hour = utcHour + utcDifference;
                if (hour < 17 && hour > 6) {
                    switch (weatherDescription) {
                        case 'Clear':
                            weatherIcon.textContent = '☀️'
                            break;
                        case 'Clouds':
                            weatherIcon.textContent = '☁️'
                            break;
                        case 'Atmosphere':
                            weatherIcon.textContent = '💨'
                            break;
                        case 'Snow':
                            weatherIcon.textContent = '❄️'
                            break;
                        case 'Rain':
                            weatherIcon.textContent = '🌧️'
                            break;
                        case 'Drizzle':
                            weatherIcon.textContent = '💦'
                            break;
                        case 'Thunderstorm':
                            weatherIcon.textContent = '⛈️'
                            break;
                    }
                } else {
                    switch (weatherDescription) {
                        case 'Clear':
                            weatherIcon.textContent = '🌕'
                            break;
                        case 'Clouds':
                            weatherIcon.textContent = '☁️'
                            break;
                        case 'Atmosphere':
                            weatherIcon.textContent = '💨'
                            break;
                        case 'Snow':
                            weatherIcon.textContent = '❄️'
                            break;
                        case 'Rain':
                            weatherIcon.textContent = '🌧️'
                            break;
                        case 'Drizzle':
                            weatherIcon.textContent = '💦'
                            break;
                        case 'Thunderstorm':
                            weatherIcon.textContent = '⛈️'
                            break;
                    }
                }
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
})

//use enter to search
document.getElementById('searchBox').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById("search").click();
    }
})

//display values for seach
document.getElementById("search").addEventListener('click', () => {
    const citynName = searchBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citynName}&appid=${apiKey}&units=${unitType}&lang=${lang}`;

    setTimeout(() => {
        searchBox.value = ""
    }, 500);

    let weather = fetch(url)

    weather
        .then(
            res => res.json()
        )
        .then(
            data => {
                const weatherDescription = data.weather[0].main
                console.log(data);
                document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
                document.querySelector('.location').textContent = data.name;
                const utcDifference = data.timezone / 3600;
                const hour = utcHour + utcDifference;
                if (hour < 17 && hour > 6) {
                    switch (weatherDescription) {
                        case 'Clear':
                            weatherIcon.textContent = '☀️'
                            break;
                        case 'Clouds':
                            weatherIcon.textContent = '☁️'
                            break;
                        case 'Atmosphere':
                            weatherIcon.textContent = '💨'
                            break;
                        case 'Snow':
                            weatherIcon.textContent = '❄️'
                            break;
                        case 'Rain':
                            weatherIcon.textContent = '🌧️'
                            break;
                        case 'Drizzle':
                            weatherIcon.textContent = '💦'
                            break;
                        case 'Thunderstorm':
                            weatherIcon.textContent = '⛈️'
                            break;
                    }
                } else {
                    switch (weatherDescription) {
                        case 'Clear':
                            weatherIcon.textContent = '🌕'
                            break;
                        case 'Clouds':
                            weatherIcon.textContent = '☁️'
                            break;
                        case 'Atmosphere':
                            weatherIcon.textContent = '💨'
                            break;
                        case 'Snow':
                            weatherIcon.textContent = '❄️'
                            break;
                        case 'Rain':
                            weatherIcon.textContent = '🌧️'
                            break;
                        case 'Drizzle':
                            weatherIcon.textContent = '💦'
                            break;
                        case 'Thunderstorm':
                            weatherIcon.textContent = '⛈️'
                            break;
                    }
                }
            }
        )
        .catch(e => console.log(e))
})


