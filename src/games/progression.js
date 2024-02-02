import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameRunner.js';

const maxFirstElem = 20;
const progLen = 10;
const minStep = 1;
const maxStep = 10;

const run = () => {
  const start = getRandomNumber(maxFirstElem);
  const step = getRandomNumber(minStep, maxStep);
  const hideIndNum = getRandomNumber(0, 9);
  let next = start;
  const progressionArr = [];
  for (let i = 0; i < progLen; i += 1) {
    progressionArr.push(next);
    next += step;
  }
  const answer = String(progressionArr[hideIndNum]);
  progressionArr[hideIndNum] = '..';
  const question = progressionArr.join(' ');
  return [question, answer];
};

const rule = 'What number is missing in the progression?';

export default () => gameRun(run, rule);
