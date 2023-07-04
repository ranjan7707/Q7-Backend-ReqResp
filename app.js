const http = require('http');

http.createServer((req,resp)=>{
    console.log(req.url,req.method,req.header);
    resp.writeHead('Content-Type','text/html');
    resp.write('<html>');
    resp.write('<head>This is my First Project</head>');
    resp.write('<body>This is the body of my Project</body>');
    resp.write('</html>');
    resp.end();
}).listen(3100);