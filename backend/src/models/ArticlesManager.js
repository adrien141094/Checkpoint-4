const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAllArticle() {
    return this.database.query(`select *  from  ${this.table}`);
  }

  findByArticle(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  updateArticle(article) {
    return this.database.query(
      `update ${this.table} set title = ?, info = ?, price = ?, color = ?, description = ?, stock = ?, categorie = ? where id = ?`,
      [
        article.title,
        article.info,
        article.price,
        article.color,
        article.description,
        article.stock,
        article.categorie,
        article.id,
      ]
    );
  }
}

module.exports = ArticlesManager;
