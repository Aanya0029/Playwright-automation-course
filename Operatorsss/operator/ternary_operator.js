//The ternary operator is a short way of writing an if...else condition. It checks a condition and gives one result if it is true and another if it is false

//Syntax: condition ? expression_if_true : expression_if_false

//Example 1: Check if a number is even or odd
let number = 5;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Odd

//Example 2: Check if a person is an adult or a minor
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: Adult

//using if else

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}

console.log(result);


//nested ternary operator means u have multiple conditiions to check. It allows you to chain multiple ternary operators together to evaluate more complex conditions.
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(grade); // Output: B        

/*EG2: Check if a number is positive, negative, or zero
let num = -5;
let type = (num > 0) ? "Positive" :
           (num < 0) ? "Negative" : "Zero";
console.log(type); // Output: Negative

//EG3: Check if a string is empty or not
let str = "";
let isEmpty = (str === "") ? "Empty" : "Not Empty";
console.log(isEmpty); // Output: Empty

//EG4: Check if a value is null or undefined
let value = null;
let isNull = (value === null) ? "Null" : "Not Null";
console.log(isNull); // Output: Null

//EG5: Check if a value is an array or not
let arr = [];
let isArray = (Array.isArray(arr)) ? "Array" : "Not Array";
console.log(isArray); // Output: Array

//EG6: Check if a value is an object or not
let obj = {};
let isObject = (typeof obj === "object" && obj !== null) ? "Object" : "Not Object";
console.log(isObject); // Output: Object

//EG7: Check if a value is a function or not
let func = function() {};
let isFunction = (typeof func === "function") ? "Function" : "Not Function";
console.log(isFunction); // Output: Function

//EG8: Check if a value is a string or not
let str1 = "Hello";
let isString = (typeof str1 === "string") ? "String" : "Not String";
console.log(isString); // Output: String

//EG9: Check if a value is a number or not
let num1 = 42;
let isNumber = (typeof num1 === "number") ? "Number" : "Not Number";
console.log(isNumber); // Output: Number

//EG10: Check if a value is a boolean or not
let bool = true;
let isBoolean = (typeof bool === "boolean") ? "Boolean" : "Not Boolean";
console.log(isBoolean); // Output: Boolean

//EG11: Check if a value is a symbol or not
let sym = Symbol();
let isSymbol = (typeof sym === "symbol") ? "Symbol" : "Not Symbol";
console.log(isSymbol); // Output: Symbol  */

//INTERVIEW QUES
let statusCode = 404;
let category =
statusCode < 300 ? "Success" : 
statusCode < 400 ? "Redirect":
statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode} : ${category}`);

//maximum b/w 2numbers using ternary operator
let num1 = 10;      
let num2 = 20;

let max = (num1 > num2) ? num1 : num2;
console.log("Maximum number is:", max); // Output: Maximum number is: 20    

//minimum b/w 2numbers using ternary operator
let min = (num1 < num2) ? num1 : num2;
console.log("Minimum number is:", min); // Output: Minimum number is: 10   

//maximum b/w 3 numbers using ternary operator
let num3 = 30;
let max3 = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3) ? num2 : num3;
console.log("Maximum number is:", max3); // Output: Maximum number is: 30