let today = new Date();

const time = 
today.getHours() + ':' + 
today.getMinutes() + ':'+
today.getSeconds();
;

let showTime = document.querySelectorAll('span');

for(let span of showTime) {
    span.innerHTML = `${time}`;
}



