// Promises are useful for when a function needs to wait on the results of another function.
// "Producing code" is code that can take some time to finish running
// "Consuming code" is code that must wait for the result
// A promise is a JavaScript object that links producing and consuming code


// Promise stores two properties: state and result
// when Promise.state = "pending", Promise.result = "undefined"
// when Promise.state = "fulfilled", Promise.result is a value value
// when Promise.state = "rejected", Promise.result is an error object
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;  // if we change x to 5, then error is produced

    if (x == 0){
        myResolve("OK, x = 0");
    } else {
        myReject("Error, set x to 0!!");
    }
});

// Promise.then() takes two arguments, a callback for success and another for failure.
myPromise.then(
    function(value) {console.log(value);},  // code if successful. This seems to be myResolve()
    function(error) {console.log(error);}   // code if failure. This seems to be myReject()
)

