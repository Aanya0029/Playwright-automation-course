//Given an HTTP status code, print which category it belongs to.
/*299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/
let statuscode =233
if (statuscode >= 200 && statuscode < 300) {
    console.log("Success");     

} else if (statuscode >= 300 && statuscode < 400) {
    console.log("Redirection");

} else if (statuscode >= 400 && statuscode < 500) {
    console.log("Client Error");

} else if (statuscode >= 500 && statuscode < 600) {
    console.log("Server Error");

} else {
    console.log("Invalid");     

}