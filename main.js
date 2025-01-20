const time = document.getElementById('timer');
let secondsElapsed = 0;
let interval = null;

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
    time.innerHTML = `${minutes}:${seconds}`;
}
function timer(){
    secondsElapsed++;
    setTime()
}
function startclock(){
    if(interval === null){
        interval = setInterval(timer, 1000);
    }
}
function stopclock(){
    clearInterval(interval);
    interval = null;
}
function resetclock(){
    secondsElapsed = 0;
    setTime()
}