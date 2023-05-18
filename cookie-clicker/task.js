img = document.getElementById('cookie');
click = document.getElementById('clicker__counter');
outspeed = document.getElementById('speed__counter');

var timerStarted = false

img.onclick = () => {
    if (!timerStarted) {
        start = Date.now();
        timerStarted = true;
    } else {
        end = Date.now();
        speed = 1 / ((end-start)/1000);
        outspeed.textContent = speed.toFixed(2);
        timerStarted = false;
    }
    img.classList.toggle('big-cookie');
    clickCount = Number(click.textContent) + 1;
    click.textContent = clickCount;
}