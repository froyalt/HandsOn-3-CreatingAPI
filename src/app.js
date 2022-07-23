// Realizando importação do express e do banco de dados;
const express = require("express");
const db = require("./database/db");
const routes = require("./routes");

const app = express();
app.use(express.json());


app.use(routes);
db.hasConection(); 

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));