(async () => {

    const db = require("./database/db");
    const Psicologo = require("./models/Psicologo");
    await db.sync();
})();
