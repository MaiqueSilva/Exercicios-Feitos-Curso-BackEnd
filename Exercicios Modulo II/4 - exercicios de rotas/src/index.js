const express = require("express");
const { listagemCarros, obterCarro } = require(`./controladores/carros`);
const { validarSenha } = require("./intermediarios")

const roteador = express();

roteador.use(validarSenha)


roteador.get(`/carros`, listagemCarros);

roteador.get(`/carros/:id`, obterCarro);

roteador.listen(8000);