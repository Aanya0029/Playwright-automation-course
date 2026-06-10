console.log(typeof ("200")) //Output: "string"
let str = "Hello, World!";
console.log(str.length); //Output: 13

//Access by index
console.log(str[0]); //Output: "H"
console.log(str[7]); //Output: "W"
console.log(str.at(1)); //Output: "e"
console.log(str.at(-1)); //Output: "!" (negative index counts from the end)
console.log(str.charAt(0)); //Output: "H"
console.log(str.charAt(7)); //Output: "W"
console.log(str.charAt(100)); //Output: "" (out of bounds returns empty string)
console.log(str.charCodeAt(0)); //Output: 72
console.log(str.charCodeAt(7)); //Output: 87
console.log(str.charCodeAt(100)); //Output: NaN