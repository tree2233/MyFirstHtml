const API_KEY = "b93f7c2570da2f4a1002b9c80288e2d6";

function GeoPos(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        const weather = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
    });
}

function Error_func() {
    alert("Can't find your position");
}

navigator.geolocation.getCurrentPosition(GeoPos, Error_func);