

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

//Test

/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
    const GAP = " ";
    switch (op) {
        case "S":
            return arr.join(GAP) +"."
        case "Q":
            return arr.join(GAP) +"?"
        case "E":
            return arr.join(GAP) +"!"
        default:
            throw "Satzart konnte nicht erkannt werden."
    }
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}