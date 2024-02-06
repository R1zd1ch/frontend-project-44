import getRandomNumber from '../utils/randomNumber.js';
import gameData from '../gameEngine.js';

const maxNumb = 20;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const symbols = Object.keys(operations);

const run = () => {
  const num1 = getRandomNumber(maxNumb);
  const num2 = getRandomNumber(maxNumb);
  const symbol = symbols[getRandomNumber(symbols.length - 1)];
  const expression = `${num1} ${symbol} ${num2}`;
  const answer = String(operations[symbol](num1, num2));
  return [expression, answer];
};

const rule = 'What is the result of the expression?';

export default () => gameData(run, rule);
