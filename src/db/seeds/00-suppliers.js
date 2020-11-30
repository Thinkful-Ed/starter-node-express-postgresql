const suppliers = require("../fixtures/suppliers");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("suppliers").insert(suppliers);
    });
};
