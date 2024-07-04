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
console.log("\n" + getCustomerName() + " trinkt " + getProductFromAge(getCustomerAgeValidated()) + ".\n");

function getCustomerName(){return require('prompt-sync')({sigint: true})("Bitte einen Namen eingeben: ");}

function getProductFromAge(customerAge){

    const products = new Map([
        ["Milch", "Milch mit 3.5% Fettanteil"],
        ["Saft", "Saft aus frischen Orangen"],
        ["Cola", "Cola mit Eis"],
        ["Wein", "Wein, einen guten Dornfelder aus der Palz"]
        ]);

    function selectProduct(){
        if(customerAge > 0 && customerAge < 6){
            return products.get("Milch");
        }
        else if(customerAge >= 6 && customerAge <= 12){
            return products.get("Saft");
        }
        else if(customerAge >= 13 && customerAge <= 17){
            return products.get("Cola");
        }
        else if(customerAge >= 18 ){
            return products.get("Wein");
        }
        else{
            console.log("Es wurde kein sinnvolles Alter angegeben, dann gibt es eben nur: \"" + products.get("Milch") + "\".");
            return products.get("Milch");
        }
    }

    return selectProduct();
}

function getCustomerAgeValidated(){

    const numbers = /^[0-9]+$/;
    const maxTrys = 3;   
    let age = 0;

    function getCustomerAge(){
        let count = 0;
        do
        {
            count++;
            age = require('prompt-sync')({sigint: true})("Bitte ein Alter eingeben (nur die Zahl): ");
        } 
        while (!age.match(numbers) && count < maxTrys);

        return (count >= maxTrys) ? 0 : age;        
    }

    return getCustomerAge();
}
