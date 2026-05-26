//iterate-go from one to another

let tests = ["login","checkout","search"];
for (let i=0;i<tests.length;i++){
    console.log(tests[i]);

}

console.log("----");
//far...of (cleanst for values)
for(test of tests){
    console.log(test);

}
console.log("----");

tests.forEach((tests,index) =>{
    console.log(test,index);

});
console.log("----");

