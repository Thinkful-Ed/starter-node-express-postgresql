const router = require("express").Router();
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router
  .route("/out_of_stock_count")
  .get(controller.listOutOfStockCount)
  .all(methodNotAllowed);
router
  .route("/price_summary")
  .get(controller.listPriceSummary)
  .all(methodNotAllowed);
router
  .route("/total_weight_by_product")
  .get(controller.listTotalWeightByProduct)
  .all(methodNotAllowed);
router.route("/:productId").get(controller.read).all(methodNotAllowed);

module.exports = router;
