const express = require("express");
const validarSenha = require("./intermediarios");
const roteador = require(`./roteador`);

const app = express();

app.use(express.json());
app.use(validarSenha);
app.use(roteador);
app.listen(3000);