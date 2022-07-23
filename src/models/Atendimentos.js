const Sequelize = require("sequelize");
const db = require("../database/db");
const Paciente = require("./Paciente");

const Atendimentos = db.define('atendimentos', {
   paciente_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Paciente,
            key: "id",
        }
    },
    data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    observacao: {
        type: Sequelize.STRING,
        
    },
    
})

module.exports = Atendimentos;
