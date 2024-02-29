const timeIsrael = document.getElementById("timeIsrael");
const timeUk = document.getElementById("timeUk");
const timeUs = document.getElementById("timeUs");
const timeIndia = document.getElementById("timeIndia");


setInterval(() => {
    const d = new Date();
    const nyTime = d.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false });

    const ilTime = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem', hour12: false });
    const ukTime = d.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour12: false });
    const indiaTime = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false });
    timeIsrael.textContent = ilTime
    timeIndia.textContent = indiaTime
    timeUk.textContent = ukTime
    timeUs.textContent = nyTime
}, 1000);