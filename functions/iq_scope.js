//scope in functions

let env = "production";

function setupConfig() {
    let timeout = 3000; //local variable, only accessible within this function
    console.log(env); //can access global variable
    console.log(timeout); //can access local variable
}
setupConfig();
console.log(env); //can access global variable
console.log(timeout); //ReferenceError: timeout is not defined, because it's a local variable and cannot be accessed outside the function
    
