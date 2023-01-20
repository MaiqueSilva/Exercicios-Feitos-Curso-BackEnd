const express = require("express");
const { obterLivros, selecionarLivro, cadastrarLivros, alterarLivros, alterarParteLivros, excluirLivros } = require("./controladores/livros");

const roteador = express();

roteador.get("/livros", obterLivros);
roteador.get("/livros/:id", selecionarLivro);
roteador.post("/livros", cadastrarLivros);
roteador.put("/livros/:id", alterarLivros);
roteador.patch("/livros/:id", alterarParteLivros);
roteador.delete("/livros/:id", excluirLivros);


module.exports = roteador