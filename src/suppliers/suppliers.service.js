const knex = require("../db/connection");

const create = (supplier) => {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

module.exports = {
  create,
};
