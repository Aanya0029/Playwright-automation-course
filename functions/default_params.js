function retry(testName, maxRetries, delay) {
    console.log(`Retrying ${testName} up to ${maxRetries} time ${delay}ms apart`);
}
retry ("Test 1", 3, 1000);

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} time ${delay}ms apart`);
}   
retry ("Test 1");
retry ("Register user", 5, 2000);
