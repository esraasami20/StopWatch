window.onload = () => {
    var sec = 00;
    var min = 00;
    var appSec = document.getElementById("sec");
    var appMin = document.getElementById("min");
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var resetbtn = document.getElementById("reset");
    var Interval;

    startbtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);

    }
    stopbtn.onclick = () => {
        clearInterval(Interval);
    }
    resetbtn.onclick=()=>{
        clearInterval(Interval);
        appSec.innerHTML="00";
        appMin.innerHTML ="00";        
    }
    var startTimer = () => {
        sec++;
        if (sec <= 9) {
            appSec.innerHTML = "0" + sec;
        }
        if (sec > 9) {
            appSec.innerHTML = sec;
        }
        if (sec > 99) {
            min++;
            appMin.innerHTML = "0" + min;
            sec = 0;
            appSec.innerHTML = "0" + 0;
        }
        if (min > 9) {
            appMin.innerHTML = min;
        }

    }















}