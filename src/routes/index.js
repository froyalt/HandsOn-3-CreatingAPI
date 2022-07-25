// Realizando importação do express para criação das rotas com os endpoints respectivos
const express = require("express");

// Importação dos controllers

const psicologoController = require("../controller/psicologoController");
const pacienteController = require("../controller/pacienteController");
const atendimentoController = require("../controller/atendimentoController")
// Ativando o recurso de rotas do Express

const routes = express.Router();

// Rota teste para checar DB :)

routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Word!");
}),

// Rotas Psicologo

routes.get("/psicologos", psicologoController.listarPsicologo);
routes.get("/psicologos/:id", psicologoController.listarIdPsicologo);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id/deletar", psicologoController.deletarPsicologo);

// Rotas Paciente

routes.get("/pacientes", pacienteController.listarPaciente);
routes.get("/pacientes/:id", pacienteController.listarIdPaciente);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

// Rotas Atendimentos

routes.get("/atendimentos", atendimentoController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentoController.listarIdAtendimento);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);

module.exports = routes;

