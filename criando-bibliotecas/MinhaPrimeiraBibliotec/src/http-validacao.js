import chalk from "chalk";


function extraiLinks(arrlinks){
    //loop
    return arrlinks.map((objetoLink)=> Object.values(objetoLink).join())
}

async function checaStatus(arrDeURLs){

    const arrStatus  = await Promise.all(
        
        arrDeURLs.map( async (url) => {
            try{
                const response = await fetch(url)
                return response.status;
            }catch(erro){
                return manejaErros(erro)
            }
        })
    

    )
    return arrStatus;

}

function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'Link Não encontrado'
    }else{
        return "Algo deu errado"
    }
  
}

async function listaValidada(listaDeLinks){
    const arrDeURLs =  extraiLinks(listaDeLinks);
    const status = await checaStatus(arrDeURLs);

    return listaDeLinks.mpa((objeto, indice) => {
        ({
            ...objeto, 
            status: status[indice]
        })
    })
}
export default listaValidada;