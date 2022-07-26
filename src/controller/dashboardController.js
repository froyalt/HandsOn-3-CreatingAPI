const Psicologo = require("../models/Psicologo");
const Paciente = require("../models/Paciente");
const Atendimento = require("../models/Atendimentos");

const dashboardController = {
  // GET QUANTIDADE PSICOLOGOS

  numPsicologo: async (req, res) => {
    try {
      const numPsicologos = await Psicologo.findAll();
      res
        .status(200)
        .json(
          `No momento existem ${numPsicologos.length} psicólogos cadastrados.`
        );
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // GET QUANTIDADE PACIENTES

  numPaciente: async (req, res) => {
    try {
      const numPacientes = await Paciente.findAll();
      res
        .status(200)
        .json(
          `No momento existem ${numPacientes.length} pacientes cadastrados.`
        );
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // GET QUANTIDADE ATENDIMENTOS

  numAtendimento: async (req, res) => {
    try {
      const numAtendimentos = await Atendimento.findAll();
      res
        .status(200)
        .json(`Foram feitos ${numAtendimentos.length} atendimentos no total.`);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // GET MÉDIA DE ATENDIMENTOS POR PSICOLOGO

  numMedia: async (req, res) => {
    try {
      const numAtendimentos = await Atendimento.findAll();
      const numPacientes = await Paciente.findAll();
      res
        .status(200)
        .json(
          `A média de atendimentos é de ${(
            numAtendimentos.length / numPacientes.length
          ).toFixed(2)} por psicólogo.`
        );
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

module.exports = dashboardController;
