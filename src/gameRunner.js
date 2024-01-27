import readlineSync from 'readline-sync';
import getName from './utils/cli.js';
import games from './utils/gameVar.js';

const maxRounds = 3;

export default (gameName) => {
  const game = games[gameName];
  const name = getName();
  console.log(game.rule);

  for (let round = 1; round <= maxRounds; round += 1) {
    const [questionForPlayer, correctAns] = game.run();
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
