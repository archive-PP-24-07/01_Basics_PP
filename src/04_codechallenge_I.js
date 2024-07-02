
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
let numbers = /^[0-9]+$/;

let firstNumber;
do
{
    firstNumber = prompt("Bitte eine Zahl eingeben: ");
} 
while (!firstNumber.match(numbers));

let secondNumber;
do
{
    secondNumber = prompt("Bitte eine weitere Zahl eingeben: ");
} 
while (!secondNumber.match(numbers));

let sumNumbers = +firstNumber + +secondNumber;

console.log("Die Summe der Zahlen ist: " + sumNumbers );