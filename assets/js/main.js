function updateClock(){

    const now = new Date();

    // Local Time
    document.getElementById("localTime").innerHTML =
        now.toLocaleTimeString([],{
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit'
        });

    // UTC Time
    document.getElementById("utcTime").innerHTML =
        now.toUTCString().split(" ")[4] + " UTC";

}

updateClock();

setInterval(updateClock,1000);

document.getElementById("weatherTemp").textContent =
    Math.round(current.temperature_2m) + "°F";

document.getElementById("feelsLike").textContent =
    Math.round(current.apparent_temperature) + "°F";

document.getElementById("humidity").textContent =
    current.relative_humidity_2m + "%";

document.getElementById("wind").textContent =
    Math.round(current.wind_speed_10m) + " mph";

document.getElementById("barometer").textContent =
    current.surface_pressure.toFixed(2) + " inHg";
