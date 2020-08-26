// let timeOfDay = amAndPm;

function timeRightNow (){ 
    let today = new Date();
    let hour = today.getHours("#hours");
    let minute = today.getMinutes("#minutes");
    let second = today.getSeconds("#seconds");
    let amAndPm = (hour >= 12) ? "PM" : "AM";
    
    document.querySelector('#hours').innerHTML = hour; 
    document.querySelector('#minutes').innerHTML = ":"+minute+":"
    document.querySelector("#seconds").innerHTML = second += amAndPm
     
    }
    
     
    
    
    timeRightNow();
    
    setInterval(timeRightNow, 100);
    
    