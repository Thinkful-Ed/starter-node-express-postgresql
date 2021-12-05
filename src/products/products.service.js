const knex = require("../db/connection");

const list = () => {
  return knex("products").select("*");
};

const read = (product_id) => {
  return knex("products").select("*").where({ product_id }).first();
};

module.exports = {
  list,
  read,
};
