//slicing andd combining

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//slice(start, end) returns new array doesnot mutate the original array
console.log(arr.slice(2, 5)); //slice from index 2 to index 4 (end index is exclusive)
console.log(arr.slice(4)); //slice from index 4 to the end of the array
console.log(arr.slice(-3)); //slice last 3 elements of the array
console.log(arr.slice(0)); //slice the whole array */

//combining arrays
/*let arr = [10, 20, 30, 40, 50];
let s = arr.slice(1, 4); //slice from index 1 to index 3
console.log(arr); // [10, 20, 30, 40, 50]
console.log(s); // [20, 30, 40]*/

let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1, 2); //splice(start, deleteCount) mutates the original array and returns the removed elements
console.log(removed); // [20, 30]
console.log(arr1); // [10, 40, 50]

