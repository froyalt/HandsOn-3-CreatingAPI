const atendimento = require("../models/Atendimentos");

const atendimentosController = {

    // Get All Atendimentos

    listarAtendimentos: async (req, res) => {
        try {
            const listaAtendimentos = await atendimento.findAll();
            res.status(200).json(listaAtendimentos);
        } catch(error) {
            res.satus(400).json("Erro ao listar atendimentos")
        }

    }







}

module.exports = atendimentosController;
