const products = require("../fixtures/products");

exports.seed = (knex) => {
  // populates products table with products key/value pairs
  return knex
    .raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("products").insert(products);
    });
};
