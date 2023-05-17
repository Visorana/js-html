img = document.getElementById('cookie');
click = document.getElementById('clicker__counter');
speed = document.getElementById('speed__counter');

var timerStarted = false

img.onclick = () => {
    if (!timerStarted) {
        start = Date.now();
        timerStarted = true
    } else {
        end = Date.now();
        speed.textContent = clickCount / ((end-start)/1000)
    }
    img.classList.toggle('big-cookie');
    clickCount = Number(click.textContent) + 1;
    click.textContent = clickCount;
}


