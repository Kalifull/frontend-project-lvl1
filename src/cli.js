import readlineSync from "readline-sync";
export const greeting = (name) => {
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};
