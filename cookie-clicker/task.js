const img = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');
const outspeed = document.getElementById('speed__counter');

let lastClick = Date.now();

img.onclick = () => {
    speed = 1 / ((Date.now()-lastClick) / 1000);
    outspeed.textContent = speed.toFixed(2);
    img.classList.toggle('big-cookie');
    clickCount = Number(click.textContent) + 1;
    click.textContent = clickCount;
    lastClick = Date.now();
}