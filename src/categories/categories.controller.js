const categoriesService = require("./categories.service");

function list(req, res) {
  categoriesService.list().then((data) =>
    res.json({ data })
  );
}

module.exports = {
  list,
};
