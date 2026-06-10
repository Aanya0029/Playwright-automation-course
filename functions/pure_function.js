//Pure functions are functions that always return the same output for the same input and have no side effects (they do not modify any external state). They are easier to test and debug because they do not depend on or modify any external state.


function calculatePassRate(passed, total) {
    return ((passed / total) * 100).toFixed(2);
}1w

console.log(calculatePassRate(100, 200)); // Output: 50.00  
console.log(calculatePassRate(50, 100)); // Output: 50.00

//Impure function example (not pure because it modifies external state)
