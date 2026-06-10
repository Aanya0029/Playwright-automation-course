function outer() {
    let message = "Hello, I'm a closure!";
    console.log("Ouer CALLED!");
    function inner() {
        console.log(message); //can access variable from outer function, this is closure
    }
    return inner; //return the inner function to be used outside
}

let fn_inner = outer(); //call outer function to get the inner function
fn_inner(); //call the inner function, it still has access to the message variable from the outer function, this is closure
//inner(); //ReferenceError: inner is not defined, because it's a local variable and cannot be accessed outside the outer function, but fn_inner can access it because it's a closure

//closure is a function that has access to the variables from its outer function, even after the outer function has returned. It allows the inner function to remember and access the variables from its outer scope, which can be useful for data encapsulation and creating private variables.