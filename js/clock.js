ClockField = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const Hour = (String(date.getHours())).padStart(2, "0");
    const Minute = (String(date.getMinutes())).padStart(2, "0");
    const Second = (String(date.getSeconds())).padStart(2, "0");
    ClockField.innerText=`${Hour}:${Minute}:${Second}`;
}

function getTimeSecond() {
    const date = new Date();
    const Second = data.getSeconds;
    return Second*1000;
}

getClock();
setTimeout(setInterval(getClock, 1000), getTimeSecond);
