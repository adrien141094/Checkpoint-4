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

// const editOrder = async (req, res) => {
//   const order = req.body;
//   order.id = parseInt(req.params.id, 10);
//   console.log(req.body);
//   try {
//     const ord = await models.orders.updateOrder(order);
//     const userOne = await models.users.insert({
//       ...order,
//       user_id: userOne[0].insertId,
//     });
//     res
//       .status(201)
//       .json({ ...order, user_id: userOne[0].insertId, id: ord[0].insertId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Modification Invalide" });
//   }
// };

// const destroy = (req, res) => {
//   models.articles
//     .delete(req.params.id)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.status(201).json({ msg: "Article Supprimé" });
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  browse,
  readByUser,
  editOrder,
};
