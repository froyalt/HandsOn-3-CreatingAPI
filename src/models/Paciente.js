const Sequelize = require("sequelize");
const db = require("../database/db");

const Paciente = db.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    
})

module.exports = Paciente;


