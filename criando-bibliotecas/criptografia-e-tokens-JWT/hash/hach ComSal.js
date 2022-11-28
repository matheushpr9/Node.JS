import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex')
    
    const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");

    return `${sal}:${senhaHasheada}`

}

class Usuario{
    constructor (nome,senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(":")
    }

    valida(nome, senha){
        if(this.nome === nome ){
            const testeHash =  scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash,'hex')

            const hashesCorespondem = timingSafeEqual(testeHash, hashReal)

            if(hashesCorespondem){
                console.log("Usuario autentificado com sucesso")
                return true;
            }

            console.log("Usuário ou senha incorretos.")
            return false;
        }
            
    }

}

const mh = new Usuario("Matheus Henrique", "Minha_senha")

console.log(mh)

//teste de sucesso
mh.valida("Matheus Henrique", "Minha_senha")

//teste de insucesso
mh.valida("Matheus henrique", "Minha_senha")
mh.valida("Matheus Henrique", "Minhasenha")