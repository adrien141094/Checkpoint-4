const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");
const authControllers = require("./controllers/authControllers");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", articlesControllers.edit);
router.post("/articles", articlesControllers.add);
router.delete("/articles/:id", articlesControllers.destroy);

// router.post("/connexion", authControllers.signin);
router.post("/inscription", authControllers.signup);

module.exports = router;
