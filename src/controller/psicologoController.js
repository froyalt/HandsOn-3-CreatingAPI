const { Psicologo } = require("../models/Psicologo");

const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listaPsicologos = await Psicologo.findall();
        res.json(listaPsicologos)

    }
}

module.exports = psicologoController;

