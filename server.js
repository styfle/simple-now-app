const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';
const port = 3000;
const { env } = process;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(env)
    res.end(JSON.stringify(env));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
