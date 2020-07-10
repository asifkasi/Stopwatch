var min=0,sec=0,msec=0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var arr= [];
var interval;
function timer(){
    msec++
    msecHeading.innerHTML = msec
    if (msec>=100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    if (sec>=60){
        min++
        minHeading.innerHTML=min
        sec =0
    }


}


function start(){
    interval = setInterval(timer,10)
// var startbtn = document.getElementById('msec');
document.getElementById("startbtn").disabled = true;
    


}

function stop(){
    clearInterval(interval)
document.getElementById("startbtn").disabled = false;

}

function reset(){
    stop()
    arr.push(min)
    arr.push(sec)
    arr.push(msec)
    min=0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    // stop()
    // display()
}

function display(){
    arr.sort()
    
    document.write("MinTime (Min sec mSec")

    for (let index = 0; index < arr.length; index=index+3) {
        document.write(index+1," (",arr[index]," ",arr[index+1]," ",arr[index+2],").")

    }
}