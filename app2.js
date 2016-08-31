var http = require('http'); //Include the HTTP Module provided by core Node
var fs = require('fs'); //Include the file system module provided by core

function renderHomePage(req, res){
    var homePageHtml = fs.readFileSync('homePage.html');
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(homePageHtml);
}

var server = http.createServer(function(req, res){
    console.log("Someone connected to the server!");
    console.log(req.url);
    if(req.url == '/'){
        renderHomePage(req, res);
    }else if(req.url == '/logo.png'){
        var img = fs.readFileSync('logo.png');
        res.writeHead(200, {'content-type': 'img/png'});
        res.end(img, 'binary');
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('Sorry this page does not exist.');
    }
});

server.listen(8002); //This will make the node.js server created above listen for traffic on port 8002.  Whenever someone makes a request at this port the function inside createserver will be run.  
    
console.log("Our server is listening on port 8002...");
