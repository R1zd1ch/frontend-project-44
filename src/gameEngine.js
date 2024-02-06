import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const roundsCount = 3;

const run = (generateRound, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let round = 1; round <= roundsCount; round += 1) {
    const [questionForPlayer, correctAns] = generateRound();
    console.log(`Question: ${questionForPlayer}`);
    const playerAns = readlineSync.question('Your answer: ');

    if (playerAns !== correctAns) {
      console.log(`${playerAns} is wrong answer ;(. Correct answer was ${correctAns}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
