let a=10;
//var is actually function scoped

console.log(a);  //global scope means avl for everywhere in the code

function printhello(){

    console.log("hello");
    let  a=20;
    console.log(a);
    if(true)
    {
        let a=30;
        console.log(a);
    }
    console.log("F  ->", a);

}
console.log("G  ->", a);
printhello(); 