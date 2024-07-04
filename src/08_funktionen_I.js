
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();


// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Marius!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Sara";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Arian"); // Argument --> Daten für Parameter
// ausgabeNamen2("Maxine");
// ausgabeNamen2("Saba");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");    
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max", "Mütze");

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");    
}

