const productsCategories = require("../fixtures/productsCategories");

exports.seed = (knex) => {
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("products_categories").insert(productsCategories);
    });
};
