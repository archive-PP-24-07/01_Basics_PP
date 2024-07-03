/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});
let product;
let numbers = /^[0-9]+$/;
let maxTrys = 5;
let count = 0;

let customerName = prompt("Bitte einen Namen eingeben: ");

let customerAge;
do
{
    count++;
    customerAge = prompt("Bitte ein Alter eingeben (nur die Zahl): ");
} 
while (!customerAge.match(numbers) && count < maxTrys);

if (count >= maxTrys){
    product = "Milch"
    console.log("Es wurde keine Zahl eingeben, dann gibt es eben nur Milch.");
}
else if(customerAge > 0 && customerAge < 6){
    product = "Milch"
}
else if(customerAge >= 6 && customerAge <= 12){
    product = "Saft"
}
else if(customerAge >= 13 && customerAge <= 17){
    product = "Cola"
}
else if(customerAge >= 18 ){
    product = "Wein"
}
else{
    product = "Milch"
    console.log("Es wurde kein sinnvolles Alter angegeben, dann gibt es eben nur Milch.");
}

console.log("\n" + customerName + " trinkt " + product);
