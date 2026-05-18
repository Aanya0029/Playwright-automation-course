//let is block scoped
//TDZ only happend with let and const

let x = " global";
if  (true) {
    let x = "block";
    console.log(x);
    
}