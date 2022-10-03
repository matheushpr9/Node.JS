const express = require("express");

const app = express();

app.get("/",function(req, res){
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/blog", function(req, res){
    res.send("Ben vindo ao Blog")
})

app.get('/ola/:nome',function(req, res){
    res.send("<h1>Ola, <br> seja bem-vindo " + req.params['nome'] + "!</h1>");
    //res.send(req.params);
    // só posso mandar um send por função
})

//sempre a ultima função do meu código
app.listen(8081,
    function(){
        console.log("Servidor rodando na url http://localhost:8081")
    }
    );


//função de call back /   trigerrs

// rotas são caminhos de uma aplicação

// express é um framework oriemtado a rotas