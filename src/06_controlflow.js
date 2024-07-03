// Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 40;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = ageJohn > ageMark;
// isJohnEqual = ageJohn == ageMark;

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

// if(isJohnOlder)
// {
//     console.log("John ist älter.");
// }
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt wie Mark");
// }
// else
// {
//     console.log("John ist jünger.");
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

// job = "driver";  // .. fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein! 
// job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
// job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

switch (job) {
    case "driver":
        console.log(firstName + " fährt TAXI.");
    break;
    case "diver":
        console.log(firstName + " taucht im Rhein!");
    break;
    case "artist":
        console.log(firstName + " malt ein Bild!");
    break;
    case "teacher":
        console.log(firstName + " unterrichtet!");
    break;
    case "instructor":
        console.log(firstName + " unterrichtet!");
    break;

    default:
        console.log(firstName + " macht etwas anderes!");
    break;
}


