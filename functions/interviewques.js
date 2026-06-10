function runTest(name, status, duration) {
    return `${name}: ${status} (${duration} ms)`;
}
const r = runTest("Login test", "Passed", 320);
console.log(r); //prints the returned value from the function
