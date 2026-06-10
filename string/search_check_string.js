//searching and checking for a string in a given string

let url = "https://www.example.com/login";
//includes() method checks if the string contains a specified value and returns true or false
console.log(url.includes("login")); //Output: true
console.log(url.includes("register")); //Output: false
//startsWith() method checks if the string starts with a specified value and returns true or false
console.log(url.startsWith("https://")); //Output: true
console.log(url.startsWith("http://")); //Output: false
//endsWith() method checks if the string ends with a specified value and returns true or false
console.log(url.endsWith("/login")); //Output: true
console.log(url.endsWith("/register")); //Output: false

//indexOf() method returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
console.log(url.indexOf("login")); //Output: 26
console.log(url.indexOf("register")); //Output: -1

//lastIndexOf() method returns the index of the last occurrence of a specified value in a string. If the value is not found, it returns -1.
console.log(url.lastIndexOf("login")); //Output: 26
console.log(url.lastIndexOf("register")); //Output: -1

