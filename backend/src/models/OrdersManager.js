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

  updateOrder(order) {
    return this.database.query(
      `update ${this.table} set status = ?, adress = ?, city = ?, countrie = ?, postal_code = ?, coupon_code = ?  where id = ?`,
      [
        order.status,
        order.adress,
        order.city,
        order.countrie,
        order.postal_code,
        order.coupon_code,
        order.id,
      ]
    );
  }
}

module.exports = OrdersManager;
