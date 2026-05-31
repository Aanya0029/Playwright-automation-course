let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);
//arr = [ 1, 2, 3, 4, 5, 6 ]
//index 0,1,2,3,4,5

/*1/2
splice(start: number, deleteCount?: number): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.*/
/*arr.splice(2,1);//delete from index 2 and 1 value delete
console.log(arr);

arr.splice(2,0,99);//delete from index 2 and 0 element delete an put 99
console.log(arr);*/

arr.splice(1,2,10,20);//delete from index 1 and 2 value delete and add 10,20
console.log(arr);