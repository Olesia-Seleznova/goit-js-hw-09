import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  timeface: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDay = new Date();
    if (selectedDates[0] < currentDay) {
      alert("Please choose a date in the future");
      refs.start.disabled = true;
      selectedDates[0] = new Date();
    } else {
      refs.start.disabled = false;
      selectedTime = selectedDates[0];
    };
  },
};

const calendar = flatpickr('#datetime-picker', options);

const timer = {
  start() {
    const andDate = calendar.selectedDates[0];
    
    intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = andDate - currentDate;
     
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimeface({ days, hours, minutes, seconds });
      console.log(`${days}:${hours}:${minutes}:${seconds}`);

      if (deltaTime < 1000) {
        return clearInterval(intervalId);
      }
    }, 1000);
  },
} 

refs.start.addEventListener('click', () => {
  timer.start();
})

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimeface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};




