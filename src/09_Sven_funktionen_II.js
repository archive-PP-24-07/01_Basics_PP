/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

console.log(calculateAndReturnResultString(formatBasicArithmeticStringToCalculate(readBasicArithmeticString())));

function calculateAndReturnResultString(formatedBAArray){
	const ERROR_DIVIDE_BY_ZERO = "Division durch 0 ist leider in diesem Universum nicht möglich.\nBitte das Universum wechseln oder das Ganze sein lassen.";
    const ERROR_OPERATOR_NOT_DETECTED = "Grundrechenart konnte nicht erkannt werden.";

	function add(first, second){
		return first + second;
	}

	function substract(first, second){
		return first - second;
	}

	function multiplicate(first, second){
		return first * second;
	}

	function divideToFixed(first, second){
		if (second == 0){
			return ERROR_DIVIDE_BY_ZERO
		}
		return (first / second).toFixed(2);
	}
	
	function calculate(){
		let arithmeticInfo = "";
		let result;
		let first = parseFloat(formatedBAArray[0]);
		let second = parseFloat(formatedBAArray[2]);
		let operator = formatedBAArray[1];

		if(operator == "+"){
			arithmeticInfo = "Addition: "; 
			result = add(first,second);
		}
		else if(operator == "-"){
			arithmeticInfo = "Subtraktion: "; 
			result = substract(first, second);
		}
		else if(operator == "*"){
			arithmeticInfo = "Multiplikation: "; 
			result = multiplicate(first, second);
		}
		else if(operator == "/"){
			arithmeticInfo = "Division: "; 
			result = divideToFixed(first, second);
		}
		else{
			throw ERROR_OPERATOR_NOT_DETECTED
		}
		
		if(isNaN(result)){
			return result;
		}
		else{
			arithmeticInfo += first + operator + second;
			return arithmeticInfo + " = " + result;
		}

	}

	return calculate();
}

function readBasicArithmeticString(){
	const ERROR_INVALID_INPUT = "Ungültige Eingabe. Das Programm wird beendet!"
	const prompt = require('prompt-sync')({sigint: true});
	const info = "Bitte eine Berechnung eingeben:\n(z. Bsp. : 3 + 5 oder -2,5 *4.2 oder 1.23 /-4.56 oder 0.1+  0,2 oder 1 : 0,5 etc.)"
	const basicArithmeticPattern = /^[-+]?\d*\.?\d+[-+*/][-+]?\d*\.?\d+$/;
    const maxTrys = 3;   
    let chosenArithmetic = "";

    function getBasicArithmeticValidated(){
		let count = 0;
        do
        {
			console.log(info);
            count++;
			let filteredString = removeWhitespaces(prompt("Eingabe: "));
			filteredString = replaceComma(filteredString);
			filteredString = replaceAlternativDivideOperator(filteredString);
            chosenArithmetic = filteredString;
        } 
        while (!chosenArithmetic.match(basicArithmeticPattern) && count < maxTrys);

		if(count >= maxTrys){
			 throw ERROR_INVALID_INPUT;
		}else{
			return chosenArithmetic;    
		}
    }

    return getBasicArithmeticValidated();
}

function removeWhitespaces(string){
	return string.replace(/\s/g, '');
}

function replaceComma(string){
	return string.replace(/,/g, '.');
}

function replaceAlternativDivideOperator(string){
	return string.replace(/:/g, '/');
}

function formatBasicArithmeticStringToCalculate(basicArithmeticString ){
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