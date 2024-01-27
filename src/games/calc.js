import getRandomNumber from '../utils/randomNumber.js';

const maxNumb = 20;

const symbols = ['+', '-', '*'];

const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
];

const run = () => {
  const num1 = getRandomNumber(maxNumb);
  const num2 = getRandomNumber(maxNumb);
  const opInd = getRandomNumber(operations.length - 1);

  const expression = `${num1} ${symbols[opInd]} ${num2}`;
  const answer = String(operations[opInd](num1, num2));

  return [expression, answer];
};

const rule = 'What is the result of the expression?';

export default { run, rule };
