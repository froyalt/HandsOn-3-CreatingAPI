const Psicologo = require("../models/Psicologo");
const bcrypt = require("bcryptjs");

const loginController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const psicologo = await Psicologo.findOne({
      where: {
        email,
      },
    });

    if (!psicologo) {
      res
        .status(401)
        .json("E-mail ou senha inválido, verifique e tente novamente");
    }

    if (!bcrypt.compareSync(senha, psicologo.senha)) {
      res
        .status(401)
        .json("E-mail ou senha inválido, verifique e tente novamente");
    } else {
      return res.json("Logado");
    }
  },
};

module.exports = loginController;
