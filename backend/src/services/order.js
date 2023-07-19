const Joi = require("joi");

const checkOrderData = (req, res, next) => {
  const { error } = Joi.object({
    id: Joi.number().allow(null).optional(),
    status: Joi.string().required(),
    adress: Joi.string().required(),
    city: Joi.string().required(),
    countrie: Joi.string().required(),
    postal_code: Joi.number().required(),
    coupon_code: Joi.number().required(),
    categorie: Joi.string().required(),
    user_id: Joi.number().optional().allow(null),
  }).validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(400).json({ msg: "invalid credential" });
  } else {
    next();
  }
};

module.exports = checkOrderData;
