 function makeCounter(start= 0){
    let count = start;
    return {
         increament() {count++;},
         decrement() {count--;},
            get() {return count;}
        }
    }
 