let a =5;
console.log(a++ + ++a - --a +a-- + ++a);
// Explanation of the expression:
// 1. a++: returns 5 (postfix increment), then a becomes 6
// 2. ++a: increments a to 7, then returns 7
// 3. --a: decrements a to 6, then returns 6
// 4. a--: returns 6 (postfix decrement), then a becomes 5
// 5. ++a: increments a to 6, then returns 6

console.log(a); // Output: 6 (the final value of a after all increments and decrements)
