let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
     let date = new Date();
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();
 

       let hourRotation = 30*hours + minutes/2;
       let minutesRotation = 6*minutes;
       let secondsRotation = 6*seconds;

       hr.style.transform = `rotate(${hourRotation}deg)`;
       min.style.transform = `rotate(${minutesRotation}deg)`;
       sec.style.transform = `rotate(${secondsRotation}deg)`;
}

setInterval(displayTime,1000);