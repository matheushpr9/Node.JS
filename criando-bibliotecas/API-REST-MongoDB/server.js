const http = require("http")

const porta = 3000;

const server  = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('API em Node');
    
})

server.listen(porta, () =>{
    console.log(`Servidor escutando em http://localhost:${porta}`)
})