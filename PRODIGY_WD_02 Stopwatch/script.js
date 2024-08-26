let timer;
let isRunning = false;
let elapsedTime = 0;
let lapCount = 0;

const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const timeDisplay = document.getElementById('time');
const lapsContainer = document.getElementById('laps');

startStopBtn.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        timeDisplay.classList.remove('start');
        timeDisplay.classList.add('stop');
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
        timeDisplay.classList.remove('stop');
        timeDisplay.classList.add('start');
    }
    isRunning = !isRunning;
});

lapBtn.addEventListener('click', function () {
    if (isRunning) {
        lapCount++;
        const lapTime = timeDisplay.textContent;
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapElement.classList.add('lap');
        lapsContainer.appendChild(lapElement);
    }
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    elapsedTime = 0;
    lapCount = 0;
    timeDisplay.textContent = '00:00:00';
    lapsContainer.innerHTML = '';
    startStopBtn.textContent = 'Start';
    timeDisplay.classList.remove('start', 'stop');
    isRunning = false;
});

function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    timeDisplay.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}
