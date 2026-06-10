//iife(Immediately Invoked Function Expression)
//IIFE is a function that is immediately invoked. It is a self-executing function, meaning it is executed as soon as it is defined.
(function() {
    console.log("This is an IIFE");
})();

(function() {
  // Code inside the IIFE goes here
  var privateVariable = "Hello, I'm private!";
  function privateFunction() {
    console.log(privateVariable);
  }
  privateFunction(); // Output: Hello, I'm private!
})();

( function() {
    //playwright code goes here
})();

(function() {
    //This is a self-invoking function, it is executed immediately after it is defined.
    console.log("This is a self-invoking function");
})();

(() => {
    //This is a self-invoking function, it is executed immediately after it is defined.
    console.log("complete");
})();