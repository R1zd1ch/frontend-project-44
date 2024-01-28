import _ from 'lodash';
import getRandomNumber from '../utils/randomNumber.js';

const maxFirstElem = 20;
const minLength = 5;
const maxLenght = 10;
const minStep = 1;
const maxStep = 10;

const run = () => {
  const pFirstEl = getRandomNumber(maxFirstElem);
  const pLen = getRandomNumber(minLength, maxLenght);
  const pStep = getRandomNumber(minStep, maxStep);
  const limit = pFirstEl + pLen * pStep;
  const hideEl = getRandomNumber(1, pLen) - 1;

  const progressionArr = _.range(pFirstEl, limit, pStep);
  const firstHalfArr = progressionArr.slice(0, hideEl).join(' ');
  const secondHalfArr = progressionArr.slice(hideEl + 1).join(' ');
  const question = `${firstHalfArr} .. ${secondHalfArr}`.trim();
  const answer = String(progressionArr[hideEl]);

  return [question, answer];
};

const rule = 'What number is missing in the progression?';

export default { run, rule };
