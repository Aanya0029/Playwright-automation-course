function logResult (suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}
logResult("Login tests", "Test 1: Passed", "Test 2: Failed", "Test 3: Passed");
logRegister("Register tests", "Test 1: Passed", "Test 2: Passed", "Test 3: Failed");