const http = require("http")
const porta = 3000;

const rotas ={
        '/' : 'Api em Node',
        '/livros' : 'Entrei na página de çivros',
        '/autores' : 'Listagem de autores'
}

const server  = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
    
})

server.listen(porta, () =>{
    console.log(`Servidor escutando em http://localhost:${porta}`)
})