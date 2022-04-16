import games, { getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (opetator, firstNumber, secondNumber) => {
  switch (opetator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown order state: '${opetator}'!`);
  }
};

const maxFirstNumber = 50;

const maxSecondNumber = 25;

const getCorrectAnswer = () => {
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const firstNumber = getRandomInt(1, maxFirstNumber);
  const secondNumber = getRandomInt(1, maxSecondNumber);
  const question = `${firstNumber}${operator}${secondNumber}`;
  const correctAnswer = calculate(operator, firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const brainCalc = () => {
  games(rules, getCorrectAnswer);
};

export default brainCalc;
