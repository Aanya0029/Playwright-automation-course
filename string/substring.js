let str = "Login_Test_Pass_001";
console.log(str.slice(0, 5)); //prints "Login because it starts from index 0 and ends at index 4"
console.log(str.slice(11)); //prints "_Pass_001 because it starts from index 11"

let testNumber = str.slice(-3);
console.log(testNumber); //prints "001" because it starts from the last index

console.log(str.includes("Pass")); //prints true because it includes "Pass"
console.log(str.includes("Fail")); //prints false because it does not include "Fail"

//substring is used to extract a substring from a string
//substring(startIndex, endIndex)
// no negative treat as 0

console.log(str.substring(0,10));
str.at(0); //