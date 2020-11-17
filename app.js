var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval;

function timer(){
  
    msec++;
    msecheading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secheading.innerHTML = sec;
        msec=0;
    }
    if(sec>=60){
        min++;
        minheading.innerHTML = min;
        sec = 0;
    }
}
function start(){
interval = setInterval(timer,10);
var startbtn = document.getElementById('start');
startbtn.disabled = true; 
// document.getElementById("start").disabled = true;

}

function stop(){
  clearInterval(interval);
  document.getElementById("start").disabled = false;
}

function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    msecheading.innerHTML = msec; 
    secheading.innerHTML = sec;
    minheading.innerHTML = min;
}
