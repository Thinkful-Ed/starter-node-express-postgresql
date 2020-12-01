const knex = require("../db/connection");

const products = knex("products");

const getAllProducts = () => products.select("*");

const getProductById = productId =>
  products.select("*").where({ product_id: productId }).first();

module.exports = {
  getAllProducts,
  getProductById,
};
