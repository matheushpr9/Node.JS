import express from "express";
import LivroController from "../controllers/livrosController.js"

const router = express.Router();

//sempre para a mais expecifica para a menos espcificas

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atuazlizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router   