const knex = require("../db/connection");

const getAllCategories = () => knex("categories").select("*");

module.exports = {
  getAllCategories,
};
