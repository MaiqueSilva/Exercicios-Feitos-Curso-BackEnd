const { mostrarProduto, detalharProduto, calcularFrete } = require("./produtos");
const express = require("express");

const rotas = express();

rotas.get("/produtos", mostrarProduto);
rotas.get("/produtos/:idProduto", detalharProduto);
rotas.get("/produtos/:idProduto/frete/:cep", calcularFrete)



module.exports = rotas

