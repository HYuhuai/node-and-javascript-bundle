function loveYou() {
    console.log("I love you!!");
}

function getTime() {
    let d = new Date(); // returns a date object with current date and time
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

// Executes myFunction after 3 seconds (3000 milliseconds)
setTimeout(loveYou, 3000);
setInterval(getTime, 1000);

console.log("Waiting on loveYou()...");
console.log("Starting up getTime()");

