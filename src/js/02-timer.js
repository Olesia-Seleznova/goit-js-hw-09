import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startBtn: document.querySelector('data-start'),
  timeface: document.querySelector('#datetime-picker'),
  textDays: document.querySelector('[data-days]'),
  textHours: document.querySelector('[data-hours]'),
  textMinutes: document.querySelector('[data-minutes]'),
  textSeconds: document.querySelector('[data-seconds]'),
};
let selectedTime = null;

// Ініціалізуємо бібліотеку на елементі input[type="text"]:
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDay = new Date();
    if (selectedDates[0] < currentDay) {
      alert("Please choose a date in the future");
      refs.startBtn.disabled = true;
      selectedDates[0] = new Date();
    } else {
      refs.startBtn.disabled = false;
      selectedTime = selectedDates[0];
    };
  },
};

const calendar = flatpickr('#datetime-picker', options);

const timer = {
 
  start() {
    const andDate = calendar.selectedDates[0];
    
    intervalID = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = andDate - currentDate;
      const timeComponents = convertMs(deltaTime);
      updateTimeface(timeComponents);
      console.log(`$(days):$(hours):$(minutes):$(seconds)`);
    }, 1000);
  }, 

  stop() {
    if(deltaTime < 1000) {
      clearInterval(intervalID);
    }
  }
} 

refs.startBtn.addEventListener('click', () => {
  timer.start();
})

// В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів.
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

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
 
function updateTimeface({ days, hours, minutes, seconds }) {
  refs.textDays.textContent = `${days}`;
  refs.textHours.textContent = `${hours}`;
  refs.textMinutes.textContent = `${minutes}`;
  refs.textSeconds.textContent = `${seconds}`;
};

// updateTimeface();


