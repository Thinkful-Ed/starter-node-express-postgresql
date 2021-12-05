const categoriesService = require("./categories.service");

const list = (req, res, next) => {
  categoriesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
};

module.exports = {
  list,
};
