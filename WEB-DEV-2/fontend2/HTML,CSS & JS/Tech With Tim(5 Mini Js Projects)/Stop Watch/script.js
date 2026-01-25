let secondElapsed = 0;
let interval = null;
const time = document.getElementById('time');
const startClockb = document.getElementById('start-clock');
const stopClockb = document.getElementById('stop-clock');
const resetClockb = document.getElementById('reset-clock');






startClockb.addEventListener('click',startClock);
stopClockb.addEventListener('click',stopClock);
resetClockb.addEventListener('click',resetClock);




function setTime(){
    const minutes=Math.floor(secondElapsed / 60);
    const seconds = secondElapsed % 60;
    time.innerHTML = `${minutes}:${seconds}`;
}
function timer(){
    secondElapsed ++;
    setTime();
}


function startClock(){
    if(interval) stopClock();
    interval = setInterval(timer,1000);
}
function stopClock(){
    clearInterval(interval);
}
function resetClock(){
    stopClock();
    secondElapsed = 0;
    setTime();
}