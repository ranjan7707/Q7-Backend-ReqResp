const http = require('http');

http.createServer((req, resp) => {
    // Log the request details to the console
    console.log(req.url, req.method, req.headers);

    // Set the Content-Type header to 'text/html'
    resp.setHeader('Content-Type', 'text/html');

    // Check the URL and send the appropriate response
    if (req.url === '/home') {
        resp.write('<html>');
        resp.write('<head><title>Welcome home</title></head>');
        resp.write('<body><h1>Welcome home</h1></body>');
        resp.write('</html>');
    } else if (req.url === '/about') {
        resp.write('<html>');
        resp.write('<head><title>Welcome to About Us page</title></head>');
        resp.write('<body><h1>Welcome to About Us page</h1></body>');
        resp.write('</html>');
    } else if (req.url === '/node') {
        resp.write('<html>');
        resp.write('<head><title>Welcome to my Node.js project</title></head>');
        resp.write('<body><h1>Welcome to my Node.js project</h1></body>');
        resp.write('</html>');
    } else {
        resp.write('<html>');
        resp.write('<head><title>Page Not Found</title></head>');
        resp.write('<body><h1>This is my Home Page</h1></body>');
        resp.write('</html>');
    }

    // End the response
    resp.end();
}).listen(5000);
