const temp = document.querySelector('.temperature');
const location = document.querySelector('.location');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const date = new Date;
const utcHour = date.getUTCHours();
export function updateWeatherIcon(weatherDescription, utcDifference) {
    const weatherIcon = document.getElementById("weather-icon");
    const hour = utcHour + utcDifference / 3600;
    const isDayTime = hour < 17 && hour > 6;
    const icons = {
        Clear: isDayTime ? '☀️' : '🌕',
        Clouds: '☁️',
        Atmosphere: '💨',
        Snow: '❄️',
        Rain: '🌧️',
        Drizzle: '💦',
        Thunderstorm: '⛈️',
    };
    weatherIcon.textContent = icons[weatherDescription] || '';
}

export const enterToSearch = document.getElementById('searchBox').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById("search").click();
    }
})

export function fetchWeather(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const weatherDescription = data.weather[0].main;
            updateWeatherIcon(weatherDescription, data.timezone);
            temp.textContent = Math.round(data.main.temp) + '°C';
            location.textContent = data.name;
            humidity.textContent = `${data.main.humidity}% Humidity`;
            wind.textContent = `${data.wind.speed} km/h speed`
        })
        .catch(error => console.log(error));
}

