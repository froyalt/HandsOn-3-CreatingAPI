(async () => {

    const database = require("./database/db");
    const Psicologo = require("./models/Psicologo");
    await database.sync();
})();
