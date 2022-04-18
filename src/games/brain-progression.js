import games, { getRandomInt } from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (step, length, number) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(number + i * step);
  }
  return array;
};

const getCorrectAnswer = () => {
  const step = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 15);
  const number = getRandomInt(0, 100);
  const array = getProgression(step, progressionLength, number);
  const hiddenIndex = getRandomInt(0, array.length - 1);
  const correctAnswer = array[hiddenIndex];
  array[hiddenIndex] = '..';
  const question = array.join(' ');
  return [question, String(correctAnswer)];
};

const brainProgression = () => {
  games(rules, getCorrectAnswer);
};

export default brainProgression;
