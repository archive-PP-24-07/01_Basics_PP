

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

console.log(calculateAndReturnResult(sliceBasicArithmeticStringToArray(getBasicArithmeticString())));

function calculateAndReturnResult(SlicedBasicArithmeticArray){
	let arithmeticInfo = "";
	let result;

	if(SlicedBasicArithmeticArray[1] == "+"){
		arithmeticInfo = "Addition: "; 
		result = parseFloat(SlicedBasicArithmeticArray[0]) + parseFloat(SlicedBasicArithmeticArray[2]);
	}
	else if(SlicedBasicArithmeticArray[1] == "-"){
		arithmeticInfo = "Subtraktion: "; 
		result = parseFloat(SlicedBasicArithmeticArray[0]) - parseFloat(SlicedBasicArithmeticArray[2]);
	}
	else if(SlicedBasicArithmeticArray[1] == "*"){
		arithmeticInfo = "Multiplikation: "; 
		result = parseFloat(SlicedBasicArithmeticArray[0]) * parseFloat(SlicedBasicArithmeticArray[2]);
	}
	else if(SlicedBasicArithmeticArray[1] == "/"){
		arithmeticInfo = "Division: "; 
		result = parseFloat(SlicedBasicArithmeticArray[0]) / parseFloat(SlicedBasicArithmeticArray[2]);
	}
	else{
		return "Exception: Grundrechenart konnte nicht erkannt werden. {function: calculateAndReturnResult)";
	}
	

	arithmeticInfo += SlicedBasicArithmeticArray[0] + SlicedBasicArithmeticArray[1] +SlicedBasicArithmeticArray[2];
	return arithmeticInfo + " = " + result;
}

function getBasicArithmeticString(){
	const prompt = require('prompt-sync')({sigint: true});
	const basicArithmeticPattern = /^[-+]?\d*\.?\d+[-+*/][-+]?\d*\.?\d+$/;
    const maxTrys = 3;   
    let chosenArithmetic ="";
	const info = "Bitte eine Berechnung eingeben:\n(z. Bsp. : 3 + 5 oder -2.5*4.2 oder 1.23 / -4.56 oder 0.1+0.2 etc.)\n"

    function getBasicArithmeticValidated(){
		let count = 0;
        do
        {
			console.log(info);
            count++;
            chosenArithmetic = removeWhitespaces(prompt("Eingabe: "));
        } 
        while (!chosenArithmetic.match(basicArithmeticPattern) && count < maxTrys);

        return (count >= maxTrys) ? "Ungültige Eingabe! Programm wird beendet." : chosenArithmetic;        
    }

    return getBasicArithmeticValidated();
}

function removeWhitespaces(string){
	return string.replace(/\s/g, '');
}

function sliceBasicArithmeticStringToArray(basicArithmeticString ){
	let operatorIndex = findIndexOfOperator(basicArithmeticString);
	let operator = String(basicArithmeticString).at(operatorIndex);
	let first = String(basicArithmeticString).substring(0,operatorIndex);
	let second = String(basicArithmeticString).substring(operatorIndex+1);
	return [first, operator, second];
}

function findIndexOfOperator(basicArithmeticString){
	const operators = ["+", "-", "*", "/"];
	let out;
	operators.forEach(operator => {
		let index = String(basicArithmeticString).indexOf(operator);
		if( index > -1){
			out = index;
		}
	});
	return out;
}