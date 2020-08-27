// let timeOfDay = amAndPm;

function timeRightNow (){ 
    let today = new Date();
    let hour = today.getHours("#hours");
    let minute = today.getMinutes("#minutes");
    let second = today.getSeconds("#seconds");
    let amAndPm = (hour >= 12) ? "PM" : "AM";
    let day = today.getDay();
    
    document.querySelector('#hours').innerHTML = hour; 
    document.querySelector('#minutes').innerHTML = ":"+minute+":"
    document.querySelector("#seconds").innerHTML = second += amAndPm
    
     
    }
    
function dateToday() {
    let day = new Date();
     let weekDay =  new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";    
    weekDay[6] = "Saturday";
    let currentDay = weekDay[day.getDay()];
    let currentDate = day.getDate();
let currentYear = day.getFullYear();
document.querySelector("#day").innerHTML = currentDay; 
document.querySelector("#date").innerHTML = currentDate;
document.querySelector("#year").innerHTML = currentYear;
}

function monthToday() {
    let monthNow = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    let currentMonth = month[monthNow.getMonth()];
    console.log(currentMonth);
document.querySelector("#month").innerHTML = currentMonth;
}
    
    timeRightNow();
     dateToday();
     monthToday();
    
    setInterval(timeRightNow, 100);
    
    