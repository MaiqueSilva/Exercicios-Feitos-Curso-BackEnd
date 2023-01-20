const rotas = require("./roteador");
const express = require("express");


const app = express();

app.use(express.json());
app.use(rotas);




app.listen(3000)