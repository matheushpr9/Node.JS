var http = require('http');

http.createServer(
    function(req, res){
        res.end("Hello World! welcome!")
    }
).listen(8081);

console.log("Servidor rodando!")

// colocar no navegador http://localhost:8081