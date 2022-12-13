const { Product, Test } = require("../schemas");
const error = require("../middlewares/errorConstructor");

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

const productReadById = async (productId) => {
  return await Product.findById(productId);
};

const productReadMany = async (data) => {
  try {
    const searchOptions = {};
    const sortOptions = { createdAt: -1 };

    const result = await Product.find(searchOptions).sort(sortOptions);
    return result;
  } catch (err) {
    throw error(err.message.err.status);
  }
};

const productUpdate = async (req) => {
  const updateData = req.body;
  const productId = req.body.id;
  delete updateData.id;

  try {
    const result = await Product.findByIdAndUpdate(productId, updateData);
    return result;
  } catch (err) {
    throw error(err, err.status);
  }
};

const productSoftDelete = async (productId) => {
  const result = await Product.findByIdAndUpdate(productId, {
    available: false,
  });
  return result;
};

/**
 * @description mongoose Test Schema 입력 테스트용
 */
const testInsert = async (req) => {
  const { name, description } = req.body;
  try {
    const result = await Test.create({ name, description });
    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  testInsert,
  productInsert,
  productReadById,
  productReadMany,
  productUpdate,
  productSoftDelete,
};
