var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
    if(req.url !== "/favicon.ico"){
        res.write('<h1>Node.js</h1>');
        console.log("running...");
        fun1(res);
        res.end('<p>Hello World!!</p>');
    }

}).listen(3000);

console.log("HTTP server is listening at port 3000.");
function fun1(res){
    console.log("fun1");
    res.write("hello,我是fun1");
}
