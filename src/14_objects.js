/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/
// function stringConnector(a,b){
//     return a + " " + b;
// }

// let person = {
//     firstName : "Marco",
//     familyName: "Mustermen",
//     salary: [120000, 160000],
//     hasPermission : true,
//     fullName: function() {
//         return stringConnector(this.firstName, this.familyName)
//     }
// } 


// output(person);
// output(person.fullName());

/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

let baikal = {
    value: "10",
    deep: {
        deeper: {
            temperature: "4 Grad Celsius",
            deepest: "Das Licht - auf 1642m!?!"
        }
    }
};


output(baikal.deep.deeper.deepest);




// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}