const categories = require("../fixtures/categories");

exports.seed = (knex) => {
  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("categories").insert(categories);
    });
};
