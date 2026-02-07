let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    pauseStopwatch();
    hours = minutes = seconds = milliseconds = 0;
    document.getElementById("display").innerHTML = "00 : 00 : 00 : 000";
    document.getElementById("lapList").innerHTML = "";
}

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerHTML =
        `${h} : ${m} : ${s} : ${ms}`;
}

function lapTime() {
    if (!isRunning) return;

    let lap = document.createElement("li");
    lap.innerText = document.getElementById("display").innerText;
    document.getElementById("lapList").appendChild(lap);
}
