let str = " Hello, World! ";

console.log(str.toUpperCase()); // Output: " HELLO, WORLD! "
console.log(str.toLowerCase()); // Output: " hello, world! "
console.log(str.trim()); // Output: "Hello, World!"

str.trimStart(); // Output: "Hello, World! "
str.trimEnd(); // Output: " Hello, World"

let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL", "PASS")); 

console.log(msg.replaceAll("FAIL", "PASS")); 


