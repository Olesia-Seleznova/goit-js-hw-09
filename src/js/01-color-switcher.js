const refs = {
body: document.querySelector('body'),
start: document.querySelector('[data-start]'),
stop: document.querySelector('[data-stop]'),
}

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

let interval = null;
refs.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  refs.start.toggleAttribute('disabled');
  refs.stop.toggleAttribute('disabled');
    interval = setInterval(() => {
       refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStop() {
  refs.start.toggleAttribute('disabled');
  refs.stop.toggleAttribute('disabled');
    return clearInterval(interval);
}