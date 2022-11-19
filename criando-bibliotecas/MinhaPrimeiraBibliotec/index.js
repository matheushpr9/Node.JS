import chalk from 'chalk'; // trocar cores e texto

import fs from 'fs'; // biblioteca buit-in
import { lstat } from 'fs/promises';

function pega_arquivo(caminho_arquivo){

    const encoding = 'UTF-8'

    fs.readFile(caminho_arquivo, encoding, (_, conteudo)=>{
        console.log(chalk.green(conteudo))
    })
}

pega_arquivo('./arquivos/texto.md')

console.log(chalk.blue('olá mundo'));

console.log(chalk.red('olá mundo'));
console.log('olá mundo');