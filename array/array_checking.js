//checking arrays

let result = Array.isArray([1, 2, 3]); //Array.isArray() method is used to check if the given value is an array or not
console.log(result); // true
let result1 = Array.isArray("hello"); //Array.isArray() method is used to check if the given value is an array or not
console.log(result1); // false

//every and some methods
let arr = [1, 2, 3, 4, 5];
let isEven = arr.every(num => num % 2 === 0); //every method is used to check if all elements of the array satisfy the condition or not
console.log(isEven); // false
let isOdd = arr.some(num => num % 2 === 1); //some method is used to check if any element of the array satisfy the condition or not 
console.log(isOdd); // true

//Plyawright AP
[200, 201, 203].every(statuscode => statuscode > 200); //every method is used to check if all elements of the array satisfy the condition or not
