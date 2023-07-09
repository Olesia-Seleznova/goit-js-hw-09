import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
   setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     return { position, delay };
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};

const promisificator = (delay, step, amount) => {
  let stepDelay = 0;
  for (let i = 1; i <= amount; i += 1) {
    stepDelay += step;
    createPromise(i, stepDelay);
  };
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit (evt) {
  evt.preventDefault();
  promisificator(Number(refs.delay.value),
    Number(refs.step.value),
    Number(refs.amount.value))
}


