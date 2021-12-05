const productsService = require("./products.service");

// Middlewares =============================================================================================================

const productExists = (req, res, next) => {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }

      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
};

// Resource Queries ====================================================================================

function read(req, res, next) {
  const { product: data } = res.locals;
  res.json({ data });
}

const list = (req, res, next) => {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
};

module.exports = {
  list,
  read: [productExists, read],
};
