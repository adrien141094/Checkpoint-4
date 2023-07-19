const AbstractManager = require("./AbstractManager");

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: "orders" });
  }

  findAllOrders() {
    return this.database.query(`select *  from  ${this.table}`);
  }
}

module.exports = OrdersManager;
