const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voila la réponse serveur');
});

server.listen(3000);