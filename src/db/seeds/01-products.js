const products = require("../fixtures/products");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("products").insert(products);
    });
};
