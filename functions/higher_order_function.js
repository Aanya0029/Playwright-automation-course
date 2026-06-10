//higher order function is a function that takes a function as an argument or returns a function as a result

function runWithLogin(testfn, testName) {
    console.log(`Starting: ${testName}`);
    // Simulate login
    let result = testfn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}
function testLogin() {
    return "Login successful";
}

function loginTestFailed() {
    return "Login failed";
}
runWithLogin(testLogin, "Login Test 1");
runWithLogin(loginTestFailed, "Login Test 2");
