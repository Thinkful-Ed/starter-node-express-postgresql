const router = require("express").Router();
const controller = require("./categories.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:categoryId([0-9]+)").all(methodNotAllowed);

module.exports = router;
