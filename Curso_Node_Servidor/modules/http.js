const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Home page</h1>');
    }
});

server.listen(port, () => console.log(`Servidor HTTP rodando na porta ${port}!`));
