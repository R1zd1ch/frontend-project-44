import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameEngine.js';

const maxNumb = 100;

const isEven = (number) => number % 2 === 0;

const run = () => {
  const question = getRandomNumber(maxNumb);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameRun(run, rule);
