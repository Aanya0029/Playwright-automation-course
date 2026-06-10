  //if (ourStatusCode >=200 && ourStatusCode < 300) {
// this is a perfectly normal function, but we can also write it as an arrow function expression
  function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
      console.log("Request is fine");
    }
}

//This is function expression, we can also write the above function as an arrow function expression
const validateStatusCode_Exp =  function(status) {
    if (status >= 200 && status < 300) {
      console.log("Request is fine");
    }
}
//Arrow function expression
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
      console.log("Request is fine");
    }
}