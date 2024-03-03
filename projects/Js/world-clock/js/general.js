const main = document.getElementById("main");
const timeIsrael = document.getElementById("timeIsrael");
const timeUk = document.getElementById("timeUk");
const timeUs = document.getElementById("timeUs");
const timeIndia = document.getElementById("timeIndia");
const timeFormat = document.getElementById("format");
let format = false;
timeFormat.addEventListener('change', () => {
    (timeFormat.value === "24") ? format = false : format = true;
})

setInterval(() => {
    const d = new Date();
    const nyTime = d.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: format });

    const ilTime = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem', hour12: format });
    const ukTime = d.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour12: format });
    const indiaTime = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: format });
    timeIsrael.textContent = ilTime
    timeIndia.textContent = indiaTime
    timeUk.textContent = ukTime
    timeUs.textContent = nyTime
}, 1000);
