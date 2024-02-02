import readlineSync from 'readline-sync';
import getName from './utils/cli.js';

const maxRounds = 3;

const gameRun = (run, rule) => {
  const name = getName();
  console.log(rule);

  for (let round = 1; round <= maxRounds; round += 1) {
    const [questionForPlayer, correctAns] = run();
    console.log(`Question: ${questionForPlayer}`);
    const playerAns = readlineSync.question('Your answer: ');

    if (playerAns === correctAns) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameRun;
