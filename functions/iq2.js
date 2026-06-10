let g_x = 70;
//nested scope| block scope
function outer() {
    let x = 10; //local variable, only accessible within this function

    function inner() {
        let y = 20; //local variable, only accessible within this function
        console.log(x); //can access variable from outer function

        inner(); //call inner function to execute its code
        console.log(y); //can access variable from inner function
    }
}
