import { createHash } from "crypto";
import { copyFileSync } from "fs";

function criaHash(senha){
    return createHash('sha256').update(senha).digest("hex")
}

console.log(criaHash("minhasenha@123"))

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário logado com sucesso")
            return true
        }else{
            console.log("Usuário e/ou senha inválido(s)!")
            return false
        }
    }
}

const usuario = new Usuario("matheus Henrique", "minha_senha")

console.log(usuario)

//caso de sucesso
usuario.autentica("matheus Henrique", "minha_senha")

//casos de fracassos
usuario.autentica("matheus Henrique", "minhasenha")
usuario.autentica("Matheus Henrique", "minha_senha")