
let getEl = selector => document.querySelector(selector);

const body = document.querySelector('body');
const btnStart = getEl('[data-start]');
const btnStop = getEl('[data-stop]');

getEl('[data-start]').addEventListener('click', btnStartClick);
getEl('[data-stop]').addEventListener('click', btnStoptClick);

let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function btnStartClick() {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
    interval = setInterval(() => {
       body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function btnStoptClick() {
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
    clearInterval(interval);
}