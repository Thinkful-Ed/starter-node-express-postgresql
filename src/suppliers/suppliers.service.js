const knex = require("../db/connection");

const create = (supplier) => {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
};

const read = (supplier_id) => {
  return knex("suppliers").select("*").where({ supplier_id }).first();
};

const update = (updatedSupplier) => {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: updatedSupplier.supplier_id })
    .update(updatedSupplier, "*");
};

const destroy = (supplier_id) => {
  return knex("suppliers").select("*").where({ supplier_id }).del();
};

module.exports = {
  create,
  read,
  update,
  destroy,
};
