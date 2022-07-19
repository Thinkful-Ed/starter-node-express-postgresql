const suppliers = require("../fixtures/suppliers");

exports.seed = (knex) => {
  // Deletes ALL existing entries
  // resets primary keys values
  // deletes all associated products to the supplier
  // then
  // insert key/value pairs from fixtures into the table
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("suppliers").insert(suppliers);
    });
};
