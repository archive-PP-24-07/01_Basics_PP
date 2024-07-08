
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

// let arr;
// arr = new Array(); //Konstruktor
// arr = []; // Literal
// arr = [2,11,7,8,10];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Pos. im Array)
// output(arr[arr.length-1]); // letze Pos. / allgemein

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {  // i --> Schleifen-Index
//     output(i); 
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {  // i --> Schleifen-Index
//     output(i); 
// }

// Inkrement (var. Schrittweite)
// for (let i = 10; i <= 100; i += 5) 
// {
//    output(i);   
// }


/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) 
// {
// //    output(i); // interner Index 
//    output(arr[i]);  // Mapping  intern --> extern
// }


/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentence(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";
    output("*********Vertical**************");
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        output(arr[i]);
    }
    output("**********Horizontal*************");

    arr.forEach(word => {str +=  word + GAP});
    return str.trim() + PUNCT;

    
}

output(getPeterSchmidtscherEinzeiler(["Ich","bin","die","coole","Maxine","Mützerich"]))
function getPeterSchmidtscherEinzeiler(arr){
    const GAP = " ";
    const PUNCT = ".";
    return arr.join(GAP) + PUNCT;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] +
                PUNCT;

    return str;
}