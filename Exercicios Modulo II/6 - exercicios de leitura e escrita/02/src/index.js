const express = require("express");
const rota = require("./roteador");

const app = express();

app.use(rota);
app.use(express.json());


app.listen(8000)