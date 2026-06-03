//concat array are used to join two or more arrays into one array
let a = [1, 2];
let b = [3, 4];
let c = a + b; //it will convert both arrays to string and then concatenate them
console.log(c); // "1,23,4"

let d = a.concat(b); //concat method is used to join two or more arrays and it returns a new array
console.log(d); // [1, 2, 3, 4]

//spread operator is also used to join two or more arrays and it returns a new array
let e = [...a, ...b]; //spread operator is used to join two or more arrays and it returns a new array
console.log(e); // [1, 2, 3, 4]

//join
let f = a.join("-"); //join method is used to join all elements of an array into a string and it returns a string
console.log(f); // "1-2"

let g = b.join(","); //join method is used to join all elements of an array into a string and it returns a string
console.log(g); // "3,4"
