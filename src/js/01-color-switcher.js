
let getEl = selector => document.querySelector(selector);

const body = document.querySelector('body');
getEl('[data-start]').addEventListener('click', btnStartClick);
getEl('[data-stop]').addEventListener('click', btnStoptClick);;
let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function btnStartClick() {
    interval = setInterval(() => {
       body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function btnStoptClick() {
    clearInterval(interval);
}