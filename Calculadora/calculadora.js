//var soma_func = require("./funcoes/soma")
//var sub_func = require("./funcoes/sub")
//var mult_func = require("./funcoes/mult")
//var div_func = require("./funcoes/div")

//console.log("A soma entre os dois números é: " + (soma_func(1,2)) )

const express = require("express");

const app = express();

app.get("/",function(req, res){
    res.sendFile(__dirname + "/templates/index.html");
});

app.listen(8081,
    function(){
        console.log("Servidor rodando na url http://localhost:8081")
    }
    );