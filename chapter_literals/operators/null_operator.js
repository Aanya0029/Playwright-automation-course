//In JavaScript, null is a special value.“There is NO value here intentionally.”Think of it like an empty box that someone purposely left empty.

//??
console.log(null>=0); //null is converted to 0 and 0>=0 is true
console.log(null==0); //false

//??
let amul = null;
let milk_required = amul ?? "nandini milk"; //if amul is null or undefined then assign "nandini milk" to milk required
console.log(milk_required);

