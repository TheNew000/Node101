var http = require('http');
// console.log(http);
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'})
    console.log("Server Created!");
    // console.log(req);
    // console.log(res);

    setTimeout(function(){
        console.log("world");
    }, 3000);

    console.log("Hello");

    res.end('<h1>Hello World!</h1>');
});

server.listen(8001);
