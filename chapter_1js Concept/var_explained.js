var a=10;
//var is actually function scoped

console.log(a);  //global scope means avl for everywhere in the code

function printhello(){

    console.log("hello");
    var a=20;
    console.log(a);
    if(true)
    {
        var a=30;
        console.log(a);
    }
}

printhello();