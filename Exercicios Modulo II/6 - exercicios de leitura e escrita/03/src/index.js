const express = require("express");
const { buscarCep } = require("./controladores/controle");

const app = express();

app.use(express.json());

app.get("/produtos/:cep", buscarCep)

app.listen(3000)