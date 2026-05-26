//| Operator | Name | Meaning                      |    |                                     |
//| -------- | ---- | ---------------------------- | -- | ----------------------------------- |
//| `&&`     | AND  | Both conditions must be true |    |                                     |
//| `||`     | OR   | At least one condition must be true |    |                                     |
//| `!`      | NOT  | Reverses true/false          |    |                                     |

//AND Operator (&&),Returns true only when both conditions are true.
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); //true
//eg 2
let marks = 40;
let passed = false;

console.log(marks > 35 && passed); //false

//OR Operator (||),Returns true if at least one condition is true.
let isWeekend = true;
let isHoliday = false;
console.log(isWeekend || isHoliday); //true
//eg 2
let hasKey = false;
let knowsPassword = true;
console.log(hasKey || knowsPassword); //true

//NOT Operator (!),Reverses the truth value of a condition.
let isRaining = false;
console.log(!isRaining);
//eg 2
let isLoggedIn = true;
console.log(!isLoggedIn);

//Logical operators are used to combine multiple conditions and return a boolean result (`true` or `false`).

let username = "Aanya";
let password = "1234";

console.log(username === "Aanya" && password === "1234"); // true
console.log(username === "Aanya" || password === "1234"); // true   
console.log(!(username === "Aanya" && password === "1234")); // false
console.log(!(username === "Aanya" || password === "1234")); // false
