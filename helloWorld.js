// Javascript traditionally a client-side language, doesn't run on a server, need to integrate it with a browser
// Node allows you to run javascript code on a server
// Node is asynchronous, can send multiple things at once without waiting for responses.
// Can generate dynamic content on the webpage, can read, edit files on server, etc. Can connect and modify databases


console.log("Hello World");
console.log("kekke");

// Creates a node server

var http = require('http'); // Requiring built-in HTTP module. Allows node to transfer data around the internet
var url = require('url');  // Allows you to do stuff with URL, such as parse URL strings

// REQuests - web browser requests a certain webpage, node responses, RESponses
http.createServer(function (req,res) {  

    //writeHead responds with a header response (e.g. 404 means page not found. 200 means everything's fine)
    // It also returns the content type. "I'm gonna send you some HTML"
    res.writeHead(200, {'Content-Type': 'text/html'});

    // e.g. input URL = http://localhost:8080/?year=2023&month=February
    var q = url.parse(req.url,true).query;
    var dates = q.year + " " + q.month; // q.year = 2023, q.month = February
    res.write("The date parsed from the URL is: " + dates);

    res.write("<br><br>")

    res.write("The URL requested is: " + req.url);  // req.url is a string with the URL requested
                                                        
    res.end('<h1>Hello world! I am porygon2</h1>');          // This is the HTML that the server is returning
}).listen(8080)
// To test, run the code, go to browser and type in "localhost:8080". Convention in node is to use port 8080 to prevent conflicts w other ports.
// This only running on your own computer, until it's pushed to the internet

