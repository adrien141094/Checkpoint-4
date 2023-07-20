const models = require("../models");
// const checkArticleData = require("../services/article");

const browse = (req, res) => {
  models.orders
    .findAllOrders()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readByUser = (req, res) => {
  models.orders
    .findByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readByOrder = (req, res) => {
  models.orders
    .findByOrder(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editOrder = async (req, res) => {
  const order = req.body;

  order.id = parseInt(req.params.id, 10);
  models.orders
    .updateOrder(order)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).json({ msg: "modification commande ok" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const newOrder = (req, res) => {
  const orderNew = req.body;

  models.orders
    .insertOrder(orderNew)
    .then(([result]) => {
      res
        .location(`/orders/${result.insertId}`)
        .status(201)
        .json({ msg: "Nouvelle commande en cours" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyOrder = (req, res) => {
  models.orders
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).json({ msg: "Article Supprimé" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  readByUser,
  readByOrder,
  editOrder,
  newOrder,
  destroyOrder,
};
