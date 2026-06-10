const doubleIt = n => n * 2; //arrow function with single parameter and implicit return
console.log(doubleIt(5)); //prints 10

const printIt = name => console.log(name); //arrow function with single parameter and no return type
printIt("Aanya"); //prints Aanya    

function add(a, b) {
    return a + b;
}   

const add2 = (a, b) => a + b; //arrow function with multiple parameters and implicit return

function say() {
    console.log("Hello");
}

const say1 = () => console.log("Hello"); //arrow function with no parameters and no return type
const say2 = () => "Hello";//arrow function with no parameters and multiple statements in the function body         
