import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameRunner.js';

const maxNumb = 100;

const run = () => {
  const question = getRandomNumber(maxNumb);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameRun(run, rule);
