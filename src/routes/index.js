// Realizando importação do express para criação das rotas com os endpoints respectivos
const express = require("express");

// Importação dos controllers

const psicologoController = require("../controller/psicologoController");

// Ativando o recurso de rotas do Express

const routes = express.Router();

routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Word!");
}),

routes.get("/psicologos", psicologoController.listarPsicologo);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);


module.exports = routes;

