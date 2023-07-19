const Joi = require("joi");

const articleSchema = () => {
  return Joi.object({
    id: Joi.number().allow(null).optional(),
    title: Joi.string().required(),
    info: Joi.string().required(),
    price: Joi.number().required(),
    color: Joi.string().required(),
    description: Joi.string().required(),
    stock: Joi.number().required(),
    categorie: Joi.string().required(),
  });
};

module.exports = articleSchema;
