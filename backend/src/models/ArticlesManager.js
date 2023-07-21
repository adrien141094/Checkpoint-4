const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAllArticle() {
    return this.database.query(`select *  from  ${this.table} as a
    inner join pictures as p on p.article_id = a.id`);
  }

  findByArticle(id) {
    return this.database.query(
      `select * from  ${this.table} as a
    inner join pictures as p on p.article_id = a.id where a.id = ?`,
      [id]
    );
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

  insertArticle(article) {
    return this.database.query(
      `
    insert into ${this.table} (title, info, price, color, description, stock, categorie) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        article.title,
        article.info,
        article.price,
        article.color,
        article.description,
        article.stock,
        article.categorie,
      ]
    );
  }
}

module.exports = ArticlesManager;
