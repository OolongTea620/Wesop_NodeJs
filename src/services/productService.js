const mongoose = require("mongoose");
const { Product, Test } = require("../schemas");
const error = require("../middlewares/errorConstructor");

const testInsert = async (req) => {
  const { name, description } = req.body;
  try {
    const result = await Test.create({ name, description });
    return result;
  } catch (err) {
    console.error(err);
  }
};

const productInsert = async (req) => {
  const product = req.body;
  const data = {
    name: product.name,
    ingredients: {
      main: product.ingredients.main,
      all: product.ingredients.all,
    },
    skinType: product.skintype,
    recommendFor: product.recommend_for,
    texture: product.texture,
    summary: product.summary,
    description: product.description,
  };

  const result = await Product.create(data);
  return result;
};

module.exports = { testInsert, productInsert };
