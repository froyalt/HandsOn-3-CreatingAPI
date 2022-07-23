// Realizando importação do express para criação das rotas com os endpoints respectivos
const express = require("express");

// Importação dos controllers

const psicologoController = require("../controller/psicologoController");

// Ativando o recurso de rotas do Express

const routes = express.Router();

routes.get("/psicologos", psicologoController.listarPsicologo);

