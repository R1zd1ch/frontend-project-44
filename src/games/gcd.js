import getRandomNumber from '../utils/randomNumber.js';
import gameRun from '../gameRunner.js';

const maxNumb = 100;

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const run = () => {
  const num1 = getRandomNumber(maxNumb);
  const num2 = getRandomNumber(maxNumb);

  const lesserNum = Math.min(num1, num2);
  const biggerNum = Math.max(num1, num2);
  const question = `${biggerNum} ${lesserNum}`;

  const gcd = findGCD(lesserNum, biggerNum);
  return [question, String(gcd)];
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => gameRun(run, rule);
