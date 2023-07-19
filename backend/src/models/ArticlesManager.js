const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAll() {
    return this.database.query(`select *  from  ${this.table}`);
  }
}

module.exports = ArticlesManager;
