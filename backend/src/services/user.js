const Joi = require("joi");

const checkUserData = (req, res, next) => {
  const { error } = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),
  }).validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json({ msg: "invalid user" });
  } else {
    next();
  }
};

module.exports = {
  checkUserData,
};
