function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
add(...num);

let responseCodes = [200, 404, 500];

function hasError(...code) {
return code.some(c => c >= 400);
}

hasError(...responseCodes); //Output: true, because 404 and 500 are error codes