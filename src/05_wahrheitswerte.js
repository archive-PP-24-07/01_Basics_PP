
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter Iteration 1
// let year = 2024;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration 2
let date = new Date();
let year = date.getFullYear();
console.log("Datum " + date);
console.log("Jahr " + date.getFullYear());
console.log("Jahr " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;


// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);

