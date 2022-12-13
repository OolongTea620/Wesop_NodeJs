const productService = require("../services/productService");
const error = require("../middlewares/errorConstructor");

const testCreate = async (req, res) => {
  const { name, description } = req.body;
  const result = await productService.testInsert(req);

  res.status(201).json({ name, description, id: result.id });
};

const productCreate = async (req, res) => {
  const insertResult = await productService.productInsert(req);
  if (!insertResult) {
    throw new error("Server_Error", 500);
  }

  res.status(201).json({ result: "success", insertResult });
};

module.exports = {
  testCreate,
  productCreate,
};
