import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const maxRoundCount = 3;

const say = console.log;

const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'Anonymous',
});

const getAnswer = () => readlineSync.question('Your answer: ');

const games = (rules, getCorrectAnswer) => {
  say('Welcome to the Brain Games!');
  const userName = getUserName();
  say(`Hello, ${userName}!`);
  say(rules);
  for (let gameCount = 0; gameCount < maxRoundCount;) {
    const [question, correctAnswer] = getCorrectAnswer();
    say(`Question: ${question}`);
    const answerUser = getAnswer();
    const resultGame = answerUser === correctAnswer;
    if (resultGame) {
      say('Correct!');
      gameCount += 1;
      if (gameCount === maxRoundCount) {
        say(`Congratulations, ${userName}!`);
      }
    } else {
      say(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      say(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default games;
