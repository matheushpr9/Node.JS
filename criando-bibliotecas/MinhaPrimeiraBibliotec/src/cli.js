import chalk from "chalk";

import fs from 'fs';

import pega_arquivo from "./index.js";

const caminho  = process.argv;

async function processaTexto(caminho){
    

    const path = caminho[2];

    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if( erro.code === "ENOENT"){
            console.log(chalk.red("Arquivo ou diretório não existe"));
            return
        }
    }

    if(fs.lstatSync(path).isFile()){
        const resultado = await pega_arquivo(path);

        console.log(
            chalk.yellowBright('lista de Links :'),
            chalk.black.bgGreen(path),
            resultado);
    } else if(fs.lstatSync(path).isDirectory()){
        const arquivos = await fs.promises.readdir(path)
        arquivos.forEach(async(nomeDeArquivo) => {
            const lista = await pega_arquivo(`${path}/${nomeDeArquivo}`);
            console.log("\n"+`${path}/${nomeDeArquivo}`+"\n")
            console.log(lista)
        })
    }

    
}

processaTexto(caminho)

//node src/cli.js ./arquivos/texto.md