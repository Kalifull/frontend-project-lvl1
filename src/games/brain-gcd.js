import games, { getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num2 !== 0 ? gcd(num2, num1 % num2) : num1);

const maxFirstNumber = 100;

const maxSecondNumber = 100;

const getCorrectAnswer = () => {
  const firstNumber = getRandomInt(0, maxFirstNumber);
  const secondNumber = getRandomInt(0, maxSecondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const brainGCD = () => {
  games(rules, getCorrectAnswer);
};

export default brainGCD;
