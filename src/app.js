// Realizando importação do express e do banco de dados;
const express = require("express");
const db = require("./database/db");

const app = express();
app.use(express.json());

const routes = express.Router();

db.hasConection(); 

