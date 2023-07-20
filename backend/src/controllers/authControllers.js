const argon2 = require("argon2");
const models = require("../models");
const { createJwt } = require("../services/jwt");

const hashing = (password) => {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    time: 5,
  });
};

const signup = async (req, res) => {
  const hash = await hashing(req.body.password);

  models.users
    .insert(req.body.mail, hash)
    .then(() => res.status(200).json({ msg: "User created" }))
    .catch(() => res.status(500).json({ msg: "Invalide user" }));
};

const signin = (req, res) => {
  models.users
    .find(req.body.mail)
    .then(async ([user]) => {
      if (user[0]) {
        try {
          if (await argon2.verify(user[0].password, req.body.password)) {
            const token = createJwt({ mail: req.body.mail });
            res
              .status(200)
              .cookie("super_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 900000),
              })
              .json({
                mail: user[0].mail,
                role: user[0].admin,
                msg: "Connected",
              });
          } else {
            res.status(404).json({ msg: "Invalid credantial" });
          }
        } catch (err) {
          console.error(err);
          res.sendStatus(500);
        }
      } else {
        res.status(404).json({ msg: "Invalid credantial" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  signup,
  signin,
};
