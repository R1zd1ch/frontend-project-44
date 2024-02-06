import getRandomNumber from '../utils/randomNumber.js';
import run from '../gameEngine.js';

const maxFirstElem = 20;
const progLen = 10;
const minStep = 1;
const maxStep = 10;
const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  let next = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(next);
    next += step;
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(maxFirstElem);
  const step = getRandomNumber(minStep, maxStep);
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);

  const progressionArray = generateProgression(start, step, progLen);

  const answer = String(progressionArray[hiddenNumberIndex]);
  progressionArray[hiddenNumberIndex] = '..';

  const question = progressionArray.join(' ');

  return [question, answer];
};

const rule = 'What number is missing in the progression?';

export default () => run(generateRound, rule);
