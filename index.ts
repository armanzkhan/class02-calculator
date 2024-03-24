#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter last Number", type: "number", name: "lastNumber" },
  {
    message: "Select any operator from the list",
    type: "list",
    name: "operator",
    choices: ["Division", "Multiplication", "Addition", "Subtraction"],
  },
]);
//** Conditions to be used */
if (answer.operator === "Division") {
  console.log("The result is " + answer.firstNumber / answer.lastNumber);
} else if (answer.operator === "Multiplication") {
  console.log("The result is " + answer.firstNumber * answer.lastNumber);
} else if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.lastNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.lastNumber);
} else {
  console.log("An Invalid Operator");
}
