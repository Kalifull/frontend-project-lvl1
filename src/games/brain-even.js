import games, { getRandomInt } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const maxNumber = 100;

const getCorrectAnswer = () => {
  const question = getRandomInt(1, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  games(rules, getCorrectAnswer);
};

export default brainEven;
