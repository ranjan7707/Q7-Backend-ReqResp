const http = require('http');

http.createServer((req,resp)=>{
    console.log(req.url,req.method,req.header);
    resp.setHeader('Content-Type','text/html');
    resp.write('<html>');
    resp.write('<head><title>This is my First Project</title></head>');
    resp.write('<body><h1>This is the body of my Project</h1></body>');
    resp.write('</html>');
    resp.end();
}).listen(4000);