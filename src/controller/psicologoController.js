const psicologo = require("../models/Psicologo");

const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listaPsicologos = await psicologo.findAll();
        res.status(200).json(listaPsicologos)

    },
    async cadastrarPsicologo (req, res)  {
        const { nome, email, senha, apresentacao } = req.body;

        const criandoCadastro = await psicologo.create({
            nome,
            email,
            senha,
            apresentacao,
        })  
        res.json(criandoCadastro)

    

    }






}




module.exports = psicologoController;

