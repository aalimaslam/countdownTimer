const day = document.getElementById('days')
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const audio = document.getElementById('audio')


function countdown(){
    const currentDate = new Date().getTime();
    
    // Date(Month, Day, year) 
    
    const futureDate = new Date('07-03-2022').getTime();
    const total = futureDate - currentDate;
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(60000*60)) % 24 );
    const days = Math.floor( total / (60000*60*24));
    day.innerText = days;
    minute.innerText = minutes;
    second.innerText = seconds;
    hour.innerText = hours;

    if(total <= 0){
        alert("Time Up!");
        audio.play();
        day.innerHTML = 00;
        hour.innerHTML = 00;
        second.innerHTML = 00;
        minute.innerHTML = 00;
        audio.volume = 1;
        clearInterval(countdownTimer);
    }
}

const countdownTimer = setInterval(countdown,1000);

// var countDownDate = new Date("Jul 25, 2021 16:37:52"). getTime();
// var myfunc = setInterval(function() { // code goes here. 
// }, 1000);
// var now = new Date(). getTime();
// document. getElementById("days")

