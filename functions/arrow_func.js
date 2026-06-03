//arrow functions are a shorter syntax for writing functions in JavaScript. They are also known as lambda functions or anonymous functions. Arrow functions do not have their own 'this' context, and they are always anonymous. They are often used for short, simple functions that do not require their own 'this' context.

//syntax of arrow function
// const functionName = (parameters) => {
//     //function body
// }

//example of arrow function
const greet = function(name) {
    return "Hi " + name; //using template literals to print the name
};
let r = greet("Aanya");
console.log(r); //prints the returned value from the function

//arrow function 
const greet2 = (name) => "Hi " + name; //using template literals to print the name
let r2 = greet2("Aanya");
console.log(r2); //prints the returned value from the function


const doubleIt = n => n * 2; //arrow function with single parameter and implicit return
console.log(doubleIt(5)); //prints 10

const printIt = name => console.log(name); //arrow function with single parameter and no return type
printIt("Aanya"); //prints Aanya



