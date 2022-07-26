const Psicologo = require("../models/Psicologo");
const bcrypt = require("bcryptjs");
const secret = require("../config/secret");
const jwt = require("jsonwebtoken");

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
      const token = jwt.sign(
        {
          id: psicologo.id,
          nome: psicologo.nome,
          email: psicologo.email,
        },
        secret.key
      );

      return res.json(token);
    }
  },
};

module.exports = loginController;
