const express = require("express");
const { monstrarAlunos, detalharAluno, adicionarAluno, excluirAluno } = require(`./controladores/alunos`)

const rotas = express();

rotas.get(`/alunos`, monstrarAlunos);
rotas.get(`/alunos/:id`, detalharAluno);
rotas.post(`/alunos`, adicionarAluno);
rotas.delete(`/alunos/:id`, excluirAluno);

module.exports = rotas;