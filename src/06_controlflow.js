// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 40;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = ageJohn > ageMark;
isJohnEqual = ageJohn == ageMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

if(isJohnOlder)
{
    console.log("John ist älter.");
}
else if(isJohnEqual)
{
    console.log("John ist gleich alt wie Mark");
}
else
{
    console.log("John ist jünger.");
}

