const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");
const authControllers = require("./controllers/authControllers");
const ordersControllers = require("./controllers/ordersControllers");

const { checkUser, checkAdmin } = require("./services/jwt");
const { checkUserData } = require("./services/user");
// const { checkOrderData } = require("./services/order");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", articlesControllers.edit);
router.post("/articles", articlesControllers.add);
router.delete("/articles/:id", articlesControllers.destroy);

router.get("/orders", ordersControllers.browse);
router.get("/orders/:id", ordersControllers.readByUser);
router.get("/orders/user/:id", ordersControllers.readByOrder);
router.put("/orders/:id", ordersControllers.editOrder);
router.post("/orders", ordersControllers.newOrder);
router.delete("/orders/user/:id", ordersControllers.destroyOrder);

router.post("/connexion", checkUserData, authControllers.signin);
router.post("/inscription", checkUserData, authControllers.signup);

router.use(checkUser);
router.use(checkAdmin);

module.exports = router;
