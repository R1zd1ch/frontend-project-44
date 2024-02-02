import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameRunner.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const maxNumb = 100;

const run = () => {
  const question = getRandomNumber(maxNumb);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameRun(run, rule);
