/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

console.log(calculateAndReturnResultString(formatBasicArithmeticInputToCalculate(readBasicArithmeticString())));

function calculateAndReturnResultString(formatedBAArray){
	
	function calculate(){
		let arithmeticInfo = "";
		let result;
		if(formatedBAArray[1] == "+"){
			arithmeticInfo = "Addition: "; 
			result = parseFloat(formatedBAArray[0]) + parseFloat(formatedBAArray[2]);
		}
		else if(SlicedBasicArithmeticArray[1] == "-"){
			arithmeticInfo = "Subtraktion: "; 
			result = parseFloat(formatedBAArray[0]) - parseFloat(formatedBAArray[2]);
		}
		else if(SlicedBasicArithmeticArray[1] == "*"){
			arithmeticInfo = "Multiplikation: "; 
			result = parseFloat(formatedBAArray[0]) * parseFloat(formatedBAArray[2]);
		}
		else if(SlicedBasicArithmeticArray[1] == "/"){
			arithmeticInfo = "Division: "; 
			result = parseFloat(formatedBAArray[0]) / parseFloat(formatedBAArray[2]);
		}
		else{
			throw "Grundrechenart konnte nicht erkannt werden.";
		}
		
		arithmeticInfo += formatedBAArray[0] + formatedBAArray[1] + formatedBAArray[2];
		return arithmeticInfo + " = " + result;

	}

	return calculate();
}

function readBasicArithmeticString(){
	const prompt = require('prompt-sync')({sigint: true});
	const info = "Bitte eine Berechnung eingeben:\n(z. Bsp. : 3 + 5 oder -2,5 *4.2 oder 1.23 /-4.56 oder 0.1+  0,2 etc.)\n"
	const basicArithmeticPattern = /^[-+]?\d*\.?\d+[-+*/][-+]?\d*\.?\d+$/;
    const maxTrys = 3;   
    let chosenArithmetic = "";

    function getBasicArithmeticValidated(){
		let count = 0;
        do
        {
			console.log(info);
            count++;
            chosenArithmetic = removeWhitespacesAndReplaceComma(prompt("Eingabe: "));
        } 
        while (!chosenArithmetic.match(basicArithmeticPattern) && count < maxTrys);

		if(count >= maxTrys){
			 throw "Ungültige Eingabe. Das Programm wird beendet!"
		}else{
			return chosenArithmetic;    
		}
    }

    return getBasicArithmeticValidated();
}

function removeWhitespacesAndReplaceComma(string){
	return replaceComma(removeWhitespaces(string));
}

function removeWhitespaces(string){
	return string.replace(/\s/g, '');
}

function replaceComma(string){
	return string.replace(/,/g, '.');
}

function formatBasicArithmeticInputToCalculate(basicArithmeticString ){
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