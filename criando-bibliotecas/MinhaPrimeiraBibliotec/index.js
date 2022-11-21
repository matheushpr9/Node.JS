import chalk from 'chalk'; // trocar cores e texto

import fs from 'fs'; // biblioteca buit-in

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code))
}

function pega_arquivo(caminho_arquivo){

    const encoding = 'UTF-8'

    fs.readFile(caminho_arquivo, encoding, ( erro, conteudo)=>{
       if(erro){
        trataErro(erro)
       }
        console.log(chalk.green(conteudo))
    })
}

pega_arquivo('./arquivos/texto.md')

console.log(chalk.blue('olá mundo'));

console.log(chalk.red('olá mundo'));
console.log('olá mundo');