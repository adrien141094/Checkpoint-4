const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(email, hash) {
    return this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [email, hash]
    );
  }

  find(email) {
    return this.database.query(`select * from  ${this.table} where mail = ?`, [
      email,
    ]);
  }
}

module.exports = AuthManager;
