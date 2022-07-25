const Sequelize = require("sequelize");

const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "Gado$2118"; // "Gado$2118"
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

const database = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);


async function hasConection() {
    try {
        await database.authenticate(); 
        console.log('Banco de dados conectado')

    }catch (error) {
    console.error('Erro ao tentar se conectar ao banco de dados')
    }
}


Object.assign(database, {
     hasConection,
})

module.exports = database;

