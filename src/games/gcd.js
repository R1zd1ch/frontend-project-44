import getRandomNumber from '../utils/randomNumber.js';

const maxNumb = 100;

const run = () => {
  const num1 = getRandomNumber(maxNumb);
  const num2 = getRandomNumber(maxNumb);

  const lesserNum = Math.min(num1, num2);
  const biggerNum = Math.max(num1, num2);
  let gcd;
  const question = `${biggerNum} ${lesserNum}`;

  for (let variationGcd = lesserNum; variationGcd > 0; variationGcd -= 1) {
    if ((lesserNum % variationGcd === 0) && (biggerNum % variationGcd === 0)) {
      gcd = variationGcd;
      break;
    }
  }
  return [question, String(gcd)];
};

const rule = 'Find the greatest common divisor of given numbers.';

export default { run, rule };
