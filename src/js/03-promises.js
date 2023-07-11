import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

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
  });
};

const promisificator = (delay, step, amount) => {
  let stepDelay = 0;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, stepDelay)
    .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     return { position, delay };
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    stepDelay += step;
  };
};

formRef.addEventListener('submit', onSubmit);

function onSubmit (evt) {
  evt.preventDefault();
  promisificator(
    Number(formRef.delay.value),
    Number(formRef.step.value),
    Number(formRef.amount.value))
}