const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "picture" });
  }

  insert(article) {
    return this.database.query(
      `insert into ${this.table} (src, alt) values (?)`,
      [article.src, article.alt]
    );
  }

  update(article) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.src, article.alt, article.id]
    );
  }
}

module.exports = ItemManager;
