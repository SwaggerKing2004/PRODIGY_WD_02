let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let timeRef = document.querySelector(".display");
let int = null;

document.getElementById("start").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeRef.textContent = "00:00:00:000";
});

document.getElementById("lap").addEventListener("click", lap);

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = (hours < 10 ? "0" + hours : hours);
    let m = (minutes < 10 ? "0" + minutes : minutes);
    let s = (seconds < 10 ? "0" + seconds : seconds);
    let ms = (milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds);

    timeRef.textContent = `${h}:${m}:${s}:${ms}`;
}

function lap() {
    let lapNow = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    let lapRecord = document.getElementById('laps');
    let li = document.createElement('li');
    li.textContent = lapNow;
    lapRecord.appendChild(li);
}
