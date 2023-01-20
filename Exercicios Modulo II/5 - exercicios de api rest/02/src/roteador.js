const express = require("express");
const { listarConvidados, adicionarConvidado, excluirConvidado } = require("./controladores/convidados")

const rotas = express();

rotas.get("/convidados", listarConvidados);
rotas.post("/convidados", adicionarConvidado);
rotas.delete("/convidados/:nome", excluirConvidado);


module.exports = rotas