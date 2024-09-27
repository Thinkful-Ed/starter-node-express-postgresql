const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Middlewares =============================================================================================================

const productExists = async (req, res, next) => {
  const product = await productsService.read(req.params.productId);

  if (product) {
    res.locals.product = product;
    return next();
  }

  next({ status: 404, message: `Product cannot be found.` });
};

// Resource Queries ====================================================================================

function read(req, res, next) {
  const { product: data } = res.locals;
  res.json({ data });
}

const list = async (req, res, next) => {
  const data = await productsService.list();

  res.json({ data });
};

const listOutOfStockCount = async (req, res, next) => {
  res.json({ data: await productsService.listOutOfStockCount() });
};

const listPriceSummary = async (req, res, next) => {
  res.json({ data: await productsService.listPriceSummary() });
};

const listTotalWeightByProduct = async (req, res, next) => {
  res.json({ data: await productsService.listTotalWeightByProduct() });
};

module.exports = {
  list,
  read: [asyncErrorBoundary(productExists), read],
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
