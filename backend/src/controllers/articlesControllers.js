const models = require("../models");
const articleSchema = require("../services/article");

const browse = (req, res) => {
  models.articles
    .findAllArticle()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.articles
    .findByArticle(req.params.id)
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

const edit = async (req, res) => {
  const article = req.body;
  article.id = parseInt(req.params.id, 10);
  try {
    const { error } = await articleSchema().validate(article, {
      abortEarly: false,
    });
    if (error) throw new Error(error);
    await models.articles.updateArticle(article);
    res.status(201).json({ msg: "Article Modifié" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Modification Invalide" });
  }
};

const add = async (req, res) => {
  const article = req.body;
  try {
    const { error } = await articleSchema().validate(article, {
      abortEarly: false,
    });
    if (error) throw new Error(error);
    await models.articles.insertArticle(article);
    res.status(201).json({ msg: "Article Créé" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Creation Invalide" });
  }
};

const destroy = (req, res) => {
  models.articles
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
  read,
  edit,
  add,
  destroy,
};
