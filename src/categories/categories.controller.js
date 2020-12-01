const CategoriesService = require("./categories.service");

function list(req, res, next) {
  CategoriesService.getAllCategories().then(categories =>
    res.json({ data: categories })
  );
}

module.exports = {
  list: [list],
};
