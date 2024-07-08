
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
let arr;
//arr = new Array(); //Konstruktor
arr = ["Ich","bin","die","coole","Maxine","Mützerich"];

function buildSentence(wordArray){
    const GAP = " ";
    const PUNCT = ".";
    let sentence = ""
    wordArray.forEach(word => {sentence += word + GAP});
    return sentence.trim() + PUNCT;
}

out(buildSentence(arr));



/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// out(getSentence("Ich","bin","Max","Mütze"));
// // out(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 PUNCT;

//     return str;
// }




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function out(outputStr) {
    console.log(outputStr);
}


