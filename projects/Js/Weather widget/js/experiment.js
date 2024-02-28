const apiKey = '580e6e590b5905cefa8e2393dc148dd9'
const unitType = 'metric'
const searchBox = document.getElementById("searchBox");
let globalWeatherData;
let chosenCity;
function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function fetchWeatherData() {
    const position = await getCurrentPosition(); // Assuming this is an async function you've created
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unitType}`;

    const response = await fetch(url);
    const data = await response.json();
    globalWeatherData = data; // Assign data to the global variable
}

// Call the function to fetch and log weather data
fetchWeatherData();
globalWeatherData.then(data => {
    console.log(data.weather.name)
})

