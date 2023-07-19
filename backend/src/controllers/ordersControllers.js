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

// const edit = async (req, res) => {
//   const article = req.body;
//   article.id = parseInt(req.params.id, 10);
//   try {
//     const { error } = await checkArticleData().validate(article, {
//       abortEarly: false,
//     });
//     if (error) throw new Error(error);
//     await models.articles.updateArticle(article);
//     res.status(201).json({ msg: "Article Modifié" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Modification Invalide" });
//   }
// };

// const add = async (req, res) => {
//   const article = req.body;
//   try {
//     const { error } = await checkArticleData().validate(article, {
//       abortEarly: false,
//     });
//     if (error) throw new Error(error);
//     await models.articles.insertArticle(article);
//     res.status(201).json({ msg: "Article Créé" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Creation Invalide" });
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
};
