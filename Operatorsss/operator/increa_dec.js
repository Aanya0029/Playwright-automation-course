let a =10;
console.log(++a +a); // Output: 22 (prefix increment increments a to 11, then adds it to the new value of a which is also 11)
console.log(a); // Output: 11 (the value of a is now 11 after the prefix increment)

let b = 10;
console.log(b++ + ++b); // Output: 22 (postfix increment returns the value of b before incrementing, which is 10, then adds it to the new value of b which is 12)
console.log(b); // Output: 12 (the value of b is now 12 after the postfix increment)

let c =10;
console.log(++c + ++c); // Output: 23 (prefix increment increments c to 11, then adds it to the new value of c which is also 11, and then adds it again to the new value of c which is also 12)
console.log(c); // Output: 12 (the value of c is now 12 after the prefix increments)

