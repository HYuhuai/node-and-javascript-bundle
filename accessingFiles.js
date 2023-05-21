var http = require('http');
var fs = require('fs'); // File System module, to allow files
var url = require('url');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." + q.pathname;    // This takes the url requested by the browser, adds a "." in front so that the node server can return that particular file (html) to the browser
    filename = filename + ".html";      // This is so that browser can query e.g. "localhost:8080/basics" instead of "localhost:8080/basics.html"

    // default page, without specifying any index, would be basics.html
    // Convention you see on a lot of websites is to take out the index.html in the URL. This is how you do it
    if(filename == "./.html"){
        filename = './basics.html';
    }

    // can go to "boostrap" to get boilerplate HTML/CSS code
    // filename (e.g. any HTML files in the dir) is returned as 'data' if found. If not, is returned as 'err'
    // e.g. localhost:8080/mathFlashCard.html loads up the page, whereas whatever.html returns 404
    fs.readFile(filename, function(err, data) {
        if(err){    // error if files doesn't exist, or cannot be opened
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found"); // end the program
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log("... Incoming request: " + req.url);    // prints the URL being requested to the console
        return res.end();
    })  
}).listen(8080);

console.log("Server listening on Port 8080....");