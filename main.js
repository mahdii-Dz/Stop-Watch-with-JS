const time = document.getElementById('timer');
let secondsElapsed = 0;
let interval = null;
let isRunning = false;

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
        isRunning = true;
    }
}
function stopclock(){
    clearInterval(interval);
    interval = null;
    isRunning = false;
}
function resetclock(){
    secondsElapsed = 0;
    setTime()
}
document.addEventListener('keydown', function(event){
    if(event.code === 'Space'){
        event.preventDefault();
        if(isRunning === true){
            stopclock()
        }
        else{
            startclock()
        }
    }
    if(event.code === "KeyR"){
        event.preventDefault();
        resetclock();
    }
})