/**
 * ===DATA TYPES===
 * undefined
 * null
 * boolean
 * string
 * symbol
 * number
 * object
 */



//3 WAYS TO DECLARE VARIABLES

var nome = 'Pedro' //global variable

let nomeCompleto = 'Pedro Talma Toledo' //local variable

const pi = 3.14 //constant variable

console.log(nome)
console.log(nomeCompleto)
console.log(pi)



//JavaScript variable are CASE SENSITIVE

var Nome = 'THIS IS '
var nOme = 'DIFFERENT FROM THIS' //THESES TWO VAR ARE DIFFERENT



//MATH
var firstNumber = 10 
var secondNumber = 5
var sum = secondNumber + firstNumber

console.log(sum) 

//========================================

var difference = firstNumber - secondNumber

console.log(difference) 

//========================================

var product = firstNumber * secondNumber

console.log(product) 

//========================================

var quotient = firstNumber / secondNumber

console.log(quotient) 

//========================================

var myNumberIncremented = 18
myNumberIncremented += 1 //IF THE INCRMENT IS 1, IT CAN BE WRITTEN (myNumberIncremented++)

console.log(myNumberIncremented) 

//========================================

var myNumberDecremented = 18
myNumberDecremented -= 1 //IF THE DECREMENT IS 1, IT CAN BE WRITTEN (myNumberIncremented--)

console.log(myNumberDecremented) 

//========================================

var myDecimal = 0.5

var yourDecimal = 1.0

var decimalProduct = myDecimal * yourDecimal

console.log(decimalProduct) 

//========================================

var decimalQuotient = yourDecimal / myDecimal

console.log(decimalQuotient)

//========================================

var intNumber = 4
var remainder = intNumber % 2

console.log(remainder)

//========================================

var firstString = "Pedro"
var secondString = "Talma"

console.log(firstString + " " + secondString)

var concString = firstString.concat(secondString)
console.log(concString)
//========================================

var myString = "I come first. "
myString += "I come second."

console.log(myString)

//========================================

var str2 = "What is my length?"
console.log(str2.length)

//========================================

var firstLetterOfStr = str2[0]

console.log(firstLetterOfStr)

//========================================

for(let i = 0; i < str2.length; i++){
    console.log(str2[i])
}











