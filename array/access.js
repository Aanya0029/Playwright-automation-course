let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[1]);
//console.log(statuses[-1]); undefined
console.log(statuses.at(-1)); //.at It supports negative indexing
console.log(statuses.at(-2));
console.log(statuses.at(-2));
console.log(statuses.at(-4));

statuses[1] = "blocked";
console.log(statuses);