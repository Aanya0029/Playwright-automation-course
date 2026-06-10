let a = 'Hello, World!'; //single quotes
let b = "Hello"; //double quotes

let name = "Aanya";
let msg = `Hello, ${name}! 2+2 = ${2+2}`; //template literal with interpolation
console.log(msg); //Output: Hello, Aanya! 2+2 = 4

//Multi-line string using template literals
let report = `
Test: Login test
Status: Passed
Duration: 320 ms`
;
console.log(String(200)); //Output: "200"
String(true); //Output: "true"
String(null); //Output: "null"
String(undefined); //Output: "undefined"    
String([1, 2, 3]); //Output: "1,2,3"

//string is a primitive type, but it has methods because JavaScript temporarily wraps it in a String object when you call a method on it
//String is immutable, so methods like toUpperCase() return a new string rather than modifying the original string

