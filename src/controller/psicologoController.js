const Psicologo = require("../models/Psicologo");

const psicologoController = {

  // GET ALL PSICOLOGOS

  listarPsicologo: async (req, res) => {
    try {
      const listaPsicologos = await Psicologo.findAll();
      res.status(200).json(listaPsicologos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //   GET PSICOLOGO POR ID

  async listarIdPsicologo(req, res) {
    try {
      const { id } = req.params;

      const ListaPsicologo = await Psicologo.findAll({
        where: {
          id: id,
        },
      });

      if (!ListaPsicologo) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(200).json(ListaPsicologo);
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  // POST PSICOLOGO

  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const cadastraPsicologo = await Psicologo.create({
        nome,
        email,
        senha,
        apresentacao,
      });

      if (!cadastraPsicologo) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        res.status(201).json(cadastraCadastro);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //   PUT PSICOLOGO

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      const AtualizaPsicologo = await Psicologo.findOne({
        where: {
          id: id,
        },
      });

      if (!AtualizaPsicologo) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        await Psicologo.update(
          { nome, email, senha, apresentacao },
          { where: { id } }
        );
      }

      res.status(200).json("Informações do psicólogo atualizadas com sucesso!");
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // DELETE PSICOLOGO POR ID

  async deletarPsicologo(req, res) {
    try {
      const { id } = req.params;

      const deletar = await Psicologo.destroy({
        where: {
          id: id,
        },
      });

      if (!deletar) {
        res.status(404).json("Id não encontrado.");
      } else {
        res.status(204).json("Psicólogo excluído com sucesso!");
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

module.exports = psicologoController;
