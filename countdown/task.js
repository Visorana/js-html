var outtimer = document.getElementById('timer');
    timer = stringToMlSeconds(outtimer.textContent);
    
var countdown = setInterval(() => {
    timer = new Date(timer - 1000);
    timeString = timer.toTimeString().slice(0, 8);
    outtimer.textContent = timeString;
    if (timeString == '00:00:00') {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
        document.getElementById('img-link').click();
    }
}, 1000)

function stringToMlSeconds(date) {
    let tempTime = date.split(":");
    let dt = new Date();
    dt.setHours(tempTime[0]);
    dt.setMinutes(tempTime[1]);
    dt.setSeconds(tempTime[2]);
    return dt;
}
