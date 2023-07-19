const AbstractManager = require("./AbstractManager");

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: "orders" });
  }

  findAllOrders() {
    return this.database.query(`select *  from  ${this.table}`);
  }

  findByUser(id) {
    return this.database.query(
      `select * from  ${this.table} where user_id = ?`,
      [id]
    );
  }
}

module.exports = OrdersManager;
