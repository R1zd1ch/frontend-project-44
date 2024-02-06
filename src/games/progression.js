import getRandomNumber from '../utils/randomNumber.js';
import gameData from '../gameRunner.js';

const maxFirstElem = 20;
const progLen = 10;
const minStep = 1;
const maxStep = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  let next = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(next);
    next += step;
  }

  return progression;
};

const run = () => {
  const start = getRandomNumber(maxFirstElem);
  const step = getRandomNumber(minStep, maxStep);
  const hideIndNum = getRandomNumber(0, 9);

  const progressionArr = generateProgression(start, step, progLen);

  const answer = String(progressionArr[hideIndNum]);
  progressionArr[hideIndNum] = '..';

  const question = progressionArr.join(' ');

  return [question, answer];
};

const rule = 'What number is missing in the progression?';

export default () => gameData(run, rule);
