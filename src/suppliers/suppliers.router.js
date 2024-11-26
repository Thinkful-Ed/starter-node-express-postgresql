const router = require("express").Router({ mergeParams: true });
const controller = require("./suppliers.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

router
  .route("/:supplierId([0-9]+)")
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
