import pega_arquivo from "./index.js";

const caminho  = process.argv;

async function processaTexto(caminho){
    const resultado = await pega_arquivo(caminho[2]);
    console.log(resultado)
}

processaTexto(caminho)

//node src/cli.js ./arquivos/texto.md