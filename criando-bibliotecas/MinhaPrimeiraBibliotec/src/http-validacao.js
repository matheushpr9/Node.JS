function extraiLinks(arrlinks){
    //loop
    return arrlinks.map((objetoLink)=> Object.values(objetoLink).join())
}

function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks)
}
export default listaValidada;