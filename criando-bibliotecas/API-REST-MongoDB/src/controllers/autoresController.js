import autores from "../models/Autor.js";

class AutoresController{

    static listarAutores = (req, res) =>{
        autores.find((err, autores)=>{
            if(!err){
                res.status(200).send(autores)
            }
        })
    }

    static listarAutoresPorId = (req, res) =>{
        const id = req.params.id;
        autores.findById(id, (err, livro) =>{
            if(err){
                res.status(400).send({message :`${err.message} - Id não encontrado.`})
            }else{
                res.status(200).send(livro.toJSON())
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body)
        autor.save((err) =>{
            if(err){
                res.status(400).send({message:`${err.message} - Requisição inválida, cadastro não realizado!`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body},(err)=> {
            if(!err){
                res.status(200).send(`Livro ${id} atualizado com sucesso`)
            }else{
                res.status(400).send({message:`${err.message} - id não encontrado, o autor não foi atualizado.`})
            }
        })
    }

    static excluirAutor = (req,res) =>{
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(400).send({message:`${err.message} - Id não encontrado, Autor não excluido.`})
            }else{
                res.status(200).send("Autor excluido com sucesso!")
            }
        })
    }

}

export default AutoresController