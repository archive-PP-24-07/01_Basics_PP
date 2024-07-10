const prompt = require("prompt-sync")({sigint:true});

const num1 = parseInt(prompt("Geben Sie die erste Zahl ein: "));
const num2 = parseInt(prompt("Geben Sie die zweite Zahl ein: "));
 

console.log("Die Summe der Zahlen ist " + (num1 + num2));
