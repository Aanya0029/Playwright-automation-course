

console.log("===== JavaScript Number Literals =====");

// 1. Integer Number
let integerNum = 100;
console.log("Integer Number:", integerNum);

// 2. Floating Point / Decimal Number
let floatNum = 99.99;
console.log("Floating Point Number:", floatNum);

// 3. Negative Number
let negativeNum = -45;
console.log("Negative Number:", negativeNum);

// 4. Exponential Number
let exponentialNum = 2e3; // 2 * 10^3 = 2000
console.log("Exponential Number:", exponentialNum);

// 5. Hexadecimal Number (Base 16)
let hexNum = 0xFF;
console.log("Hexadecimal Number:", hexNum);

// 6. Binary Number (Base 2)
let binaryNum = 0b1010;
console.log("Binary Number:", binaryNum);

// 7. Octal Number (Base 8)
let octalNum = 0o77;
console.log("Octal Number:", octalNum);

// 8. Infinity
let infinityNum = Infinity;
console.log("Infinity:", infinityNum);

// 9. Negative Infinity
let negativeInfinity = -Infinity;
console.log("Negative Infinity:", negativeInfinity);

// 10. NaN (Not a Number)
let notANumber = NaN;
console.log("NaN Value:", notANumber);

// 11. BigInt Number
let bigIntNum = 1234567890123456789012345678901234567890n;

console.log("BigInt Number:", bigIntNum);

// Type Checking
console.log(typeof bigIntNum);

// Checking Types
console.log("\n===== Type Checking =====");

console.log(typeof integerNum);
console.log(typeof floatNum);
console.log(typeof hexNum);
console.log(typeof NaN);
console.log(typeof Infinity);
