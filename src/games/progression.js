import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameRunner.js';

const maxFirstElem = 20;
const progLen = 10;
const minStep = 1;
const maxStep = 10;

const run = () => {
  const start = getRandomNumber(maxFirstElem);
  const step = getRandomNumber(minStep, maxStep);
  const hideIndNum = getRandomNumber(0, 10);
  let next = start;
  let question = '';
  let answer = '';
  for (let i = 0; i < progLen; i += 1) {
    next += step;
    if (i === hideIndNum) {
      question = `${question} ..`;
      answer = `${next}`;
    } else {
      question = `${question} ${next}`;
    }
  }

  return [question.trim(), answer];
};

const rule = 'What number is missing in the progression?';

export default () => gameRun(run, rule);
