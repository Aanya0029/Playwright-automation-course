//comparison operators are used to compare two values and return a boolean result (`true` or `false`). Here is a table of common comparison operators in JavaScript:

//| Operator | Meaning               | Example     | Result  |
//| -------- | --------------------- | ----------- | ------- |
//| `==`     | Equal to              | `5 == 5`    | `true`  |
//| `===`    | Strict equal          | `5 === "5"` | `false` |
//| `!=`     | Not equal             | `5 != 3`    | `true`  |
//| `!==`    | Strict not equal      | `5 !== "5"` | `true`  |
//| `>`      | Greater than          | `10 > 5`    | `true`  |
//| `<`      | Less than             | `3 < 1`     | `false` |
//| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
//| `<=`     | Less than or equal    | `4 <= 2`    | `false` |

let a =10;
let b =20;
console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(5 === "5"); // false 5 → number and "5" → string different types
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(5 == "5"); // true 5 → number and "5" → string, but they are equal when converted to the same type
console.log(5 != "5"); // false
console.log(0 == ""); // true 0 → number and "" → string, but they are equal when converted to the same type
console.log(0 === ""); // false 0 → number and "" → string different types
console.log(true == 1); // true true → boolean and 1 → number, but they are equal when converted to the same type
console.log(true === 1); // false true → boolean and 1 → number different types
console.log(false == 0); // true false → boolean and 0 → number, but they are equal when converted to the same type
console.log(false === 0); // false false → boolean and 0 → number different types

console.log("" == "0"); // false both are strings but different values "TRANSITIVITY BROKEN"
console.log("" === "0"); // false both are strings but different values

console.log(0 == false); // true 0 → number and false → boolean, but they are equal when converted to the same type
console.log(0 === false); // false 0 → number and false → boolean different types


console.log(null == ""); // false null and "" are different types
console.log(null === ""); // false null and "" are different types
console.log(null != ""); // true
console.log(null !== ""); // true null and "" are different types
console.log(null == 0); // false null and 0 are different types
console.log(null === 0); // false null and 0 are different types
console.log(null != 0); // true null and 0 are different types
console.log(null !== 0); // true null and 0 are different types
console.log(null == false); // false null and false are different types
console.log(null === false); // false null and false are different types
console.log(null != false); // true null and false are different types

console.log(null == undefined); // true null and undefined are equal when using loose equality
console.log(null === undefined); // false null and undefined are different types
console.log(NaN == NaN); // false NaN is not equal to anything, including itself
console.log(NaN === NaN); // false NaN is not equal to anything, including itself
console.log(NaN != NaN); // true NaN is not equal to anything, including itself
console.log(NaN !== NaN); // true NaN is not equal to anything, including itself

console.log(undefined == null); // true undefined and null are equal when using loose equality
console.log(undefined === null); // false undefined and null are different types
console.log(undefined != null); // true undefined and null are different types
console.log(undefined !== null); // true undefined and null are different types

console.log(undefined == undefined); // true undefined and undefined are equal when using loose equality
console.log(undefined === undefined); // true undefined and undefined are equal when using strict equality
console.log(undefined != undefined); // false undefined and undefined are equal when using loose equality
console.log(undefined !== undefined); // false undefined and undefined are equal when using strict equality

console.log(undefined == NaN); // false undefined and NaN are different types
console.log(undefined === NaN); // false undefined and NaN are different types
console.log(undefined != NaN); // true undefined and NaN are different types
console.log(undefined !== NaN); // true undefined and NaN are different types

console.log(null == NaN); // false null and NaN are different types
console.log(null === NaN); // false null and NaN are different types
console.log(null != NaN); // true null and NaN are different types
console.log(null !== NaN); // true null and NaN are different types

console.log(NaN == null); // false NaN and null are different types
console.log(NaN === null); // false NaN and null are different types
console.log(NaN != null); // true NaN and null are different types
console.log(NaN !== null); // true NaN and null are different types

console.log(NaN == undefined); // false NaN and undefined are different types
console.log(NaN === undefined); // false NaN and undefined are different types
console.log(NaN != undefined); // true NaN and undefined are different types
console.log(NaN !== undefined); // true NaN and undefined are different types

console.log(NaN == false); // false NaN and false are different types
console.log(NaN === false); // false NaN and false are different types
console.log(NaN != false); // true NaN and false are different types
console.log(NaN !== false); // true NaN and false are different types

console.log(NaN == 0); // false NaN and 0 are different types
console.log(NaN === 0); // false NaN and 0 are different types
console.log(NaN != 0); // true NaN and 0 are different types
console.log(NaN !== 0); // true NaN and 0 are different types

console.log(NaN == ""); // false NaN and "" are different types
console.log(NaN === ""); // false NaN and "" are different types
console.log(NaN != ""); // true NaN and "" are different types
console.log(NaN !== ""); // true NaN and "" are different types

console.log(NaN == "0"); // false NaN and "0" are different types
console.log(NaN === "0"); // false NaN and "0" are different types
console.log(NaN != "0"); // true NaN and "0" are different types
console.log(NaN !== "0"); // true NaN and "0" are different types

console.log(NaN == "false"); // false NaN and "false" are different types
console.log(NaN === "false"); // false NaN and "false" are different types
console.log(NaN != "false"); // true NaN and "false" are different types
console.log(NaN !== "false"); // true NaN and "false" are different types

console.log(NaN == "null"); // false NaN and "null" are different types
console.log(NaN === "null"); // false NaN and "null" are different types
console.log(NaN != "null"); // true NaN and "null" are different types
console.log(NaN !== "null"); // true NaN and "null" are different types

console.log(NaN == "undefined"); // false NaN and "undefined" are different types
console.log(NaN === "undefined"); // false NaN and "undefined" are different types
console.log(NaN != "undefined"); // true NaN and "undefined" are different types
console.log(NaN !== "undefined"); // true NaN and "undefined" are different types

console.log(NaN == "NaN"); // false NaN and "NaN" are different types
console.log(NaN === "NaN"); // false NaN and "NaN" are different types
console.log(NaN != "NaN"); // true NaN and "NaN" are different types
console.log(NaN !== "NaN"); // true NaN and "NaN" are different types

console.log(NaN == "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN === "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN != "Infinity"); // true NaN and "Infinity" are different types
console.log(NaN !== "Infinity"); // true NaN and "Infinity" are different types

console.log(NaN == "true"); // false NaN and "true" are different types
console.log(NaN === "true"); // false NaN and "true" are different types
console.log(NaN != "true"); // true NaN and "true" are different types
console.log(NaN !== "true"); // true NaN and "true" are different types

console.log(NaN == "false"); // false NaN and "false" are different types
console.log(NaN === "false"); // false NaN and "false" are different types
console.log(NaN != "false"); // true NaN and "false" are different types
console.log(NaN !== "false"); // true NaN and "false" are different types

console.log(NaN == "null"); // false NaN and "null" are different types
console.log(NaN === "null"); // false NaN and "null" are different types
console.log(NaN != "null"); // true NaN and "null" are different types
console.log(NaN !== "null"); // true NaN and "null" are different types

console.log(NaN == "undefined"); // false NaN and "undefined" are different types
console.log(NaN === "undefined"); // false NaN and "undefined" are different types
console.log(NaN != "undefined"); // true NaN and "undefined" are different types
console.log(NaN !== "undefined"); // true NaN and "undefined" are different types

console.log(NaN == "NaN"); // false NaN and "NaN" are different types
console.log(NaN === "NaN"); // false NaN and "NaN" are different types
console.log(NaN != "NaN"); // true NaN and "NaN" are different types
console.log(NaN !== "NaN"); // true NaN and "NaN" are different types

console.log(NaN == "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN === "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN != "Infinity"); // true NaN and "Infinity" are different types
console.log(NaN !== "Infinity"); // true NaN and "Infinity" are different types

console.log(NaN == "true"); // false NaN and "true" are different types
console.log(NaN === "true"); // false NaN and "true" are different types
console.log(NaN != "true"); // true NaN and "true" are different types
console.log(NaN !== "true"); // true NaN and "true" are different types

console.log(NaN == "false"); // false NaN and "false" are different types
console.log(NaN === "false"); // false NaN and "false" are different types
console.log(NaN != "false"); // true NaN and "false" are different types
console.log(NaN !== "false"); // true NaN and "false" are different types

console.log(NaN == "null"); // false NaN and "null" are different types
console.log(NaN === "null"); // false NaN and "null" are different types
console.log(NaN != "null"); // true NaN and "null" are different types
console.log(NaN !== "null"); // true NaN and "null" are different types

console.log(NaN == "undefined"); // false NaN and "undefined" are different types
console.log(NaN === "undefined"); // false NaN and "undefined" are different types
console.log(NaN != "undefined"); // true NaN and "undefined" are different types
console.log(NaN !== "undefined"); // true NaN and "undefined" are different types

console.log(NaN == "NaN"); // false NaN and "NaN" are different types
console.log(NaN === "NaN"); // false NaN and "NaN" are different types
console.log(NaN != "NaN"); // true NaN and "NaN" are different types
console.log(NaN !== "NaN"); // true NaN and "NaN" are different types

console.log(NaN == "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN === "Infinity"); // false NaN and "Infinity" are different types
console.log(NaN != "Infinity"); // true NaN and "Infinity" are different types
console.log(NaN !== "Infinity"); // true NaN and "Infinity" are different types


