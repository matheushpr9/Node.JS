import chalk from 'chalk'; // trocar cores e texto

import fs from 'fs'; // biblioteca buit-in
import { text } from 'stream/consumers';

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code,"deu ruim"))
}

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)];

    var contador = 0

    const resultado = capturas.map(captura => ({[captura[1]]:captura[2]}))

    return resultado.length !== 0 ? resultado : "Não há links no arquivo"


}


// function pega_arquivo(caminho_arquivo){

//     const encoding = 'UTF-8'

//     fs.readFile(caminho_arquivo, encoding, ( erro, conteudo)=>{
//        if(erro){
//         trataErro(erro)
//        }
//         console.log(chalk.green(conteudo))
//     })
// }

// função then()
// function pega_arquivo(caminho_arquivo){
//     const encoding = 'UTF-8'

//     fs.promises
//     .readFile(caminho_arquivo, encoding)
//     .then((resultado) => console.log(chalk.green(resultado)))// then trabalha com promessas, forma que ojavascript trabalha com o código assincrono
//     .catch(err => trataErro(err))
// }

async function pega_arquivo(caminho_arquivo){
    try{

        const encoding = 'UTF-8'
        const resultado = await fs.promises.readFile(caminho_arquivo,encoding);
        return extraiLinks(resultado);
    }catch(erro){
        trataErro(erro)
    }
}

pega_arquivo('./arquivos/texto.md')



//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
export default pega_arquivo;
