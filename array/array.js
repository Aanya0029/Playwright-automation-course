let fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);


let numbers = [5, 2, 9, 1, 5];
numbers.sort();
console.log(numbers);

///natural sorting order is not working for numbers so we have to provide a compare function or lexical sorting order is working for string but not for numbers

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
 
//natual sorting or lexicographical sorting is working for string but not for numbers so we have to provide a compare function for numbers
let nums1 = [10, 1, 21, 2];
nums1.sort((a, b) => a - b); //compare function for ascending order
console.log(nums1); 

let nums2 = [10, 1, 21, 2];
nums2.sort((a, b) => b - a); //compare function for descending order
console.log(nums2);