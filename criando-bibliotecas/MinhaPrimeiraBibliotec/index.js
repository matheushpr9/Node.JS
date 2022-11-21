import chalk from 'chalk'; // trocar cores e texto

import fs from 'fs'; // biblioteca buit-in

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code))
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
        const resultado = await fs.promises.readFile(caminho_arquivo,encoding)
        console.log(resultado)
    }catch{
        trataErro(erro)
    }
}

pega_arquivo('./arquivos/texto.md')

console.log(chalk.blue('olá mundo'));

console.log(chalk.red('olá mundo'));
console.log('olá mundo');