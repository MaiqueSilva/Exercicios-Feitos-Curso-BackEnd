const express = require("express");
const { monstrarPokemon, especificarPokemon } = require("./controlador/pokemon")

const rota = express();

rota.get("/pokemon", monstrarPokemon)
rota.get("/pokemon/:id", especificarPokemon)

module.exports = rota