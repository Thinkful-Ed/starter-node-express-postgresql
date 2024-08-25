const categories = require("../fixtures/categories");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert(categories);
    });
};
