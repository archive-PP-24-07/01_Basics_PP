
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
let maxTrys = 5;
let count = 0;

let firstNumber;
do
{
    count++;
    firstNumber = prompt("Bitte eine Zahl eingeben: ");
} 
while (!firstNumber.match(numbers) && count < maxTrys);

if (count >= maxTrys){
    firstNumber = Math.random();
    console.log("Es wurde keine Zahl eingeben. Eine Zufallszahl wird stattdessen verwendet: " + firstNumber );
}

let secondNumber;
count = 0;
do
{
    count++;
    secondNumber = prompt("Bitte eine weitere Zahl eingeben: ");
} 
while (!secondNumber.match(numbers) && count < maxTrys);

if (count >= maxTrys){
    secondNumber = Math.random();
    console.log("Es wurde keine weitere Zahl eingeben. Eine Zufallszahl wird stattdessen verwendet: " + secondNumber );
}

let sumNumbers = Number(firstNumber) + Number(secondNumber);

console.log("Die Summe der Zahlen ist: " + sumNumbers );