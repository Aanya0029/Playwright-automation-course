// people prefer to use "let" and const instaed of cvar because of the scope and redirection issuue with var

let a =10;
let retryCount =0;
retryCount =retryCount + 1;
retryCount =retryCount + 1;
retryCount =retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 30;// rederaction not allowed
//SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "pending";

if (testStatus === "pending"){
    let executionTime = 1200;
    console.log("inside block:", executionTime);

}
console.log(executionTime); 
//ReferenceError: executionTime is not defined

//{}//block
//if() {}
// function name(){}
