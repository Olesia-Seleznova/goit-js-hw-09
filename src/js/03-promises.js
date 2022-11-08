const bodyRef = document.querySelector('body');
const formRef = document.querySelector('form');
const inputsRef = document.querySelectorAll('input');
const btnCreatePromise = document.querySelector('button');
const delay = inputsRef[0];
const step = inputsRef[1];
const amount = inputsRef[2];

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, `${delay}`);
  });
};

btnCreatePromise.addEventListener('submit', (event) => {
  event.preventDefault();
  for (let i = 0; i <= amount - 1; i += 1) {
    console.log(delay, step, amount);

    createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   delay += step;
  }
});
