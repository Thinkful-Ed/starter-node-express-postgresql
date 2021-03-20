const knex = require("../db/connection");

function create(supplier) {
  return knex("suppliers").insert(supplier).returning("*");
}

function read(supplier_id) {
  return knex("suppliers").select("*").where({ supplier_id }).first();
}

function update(updatedSupplier) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: updatedSupplier.supplier_id })
    .update(updatedSupplier, "*");
}

function destroy(supplierId) {
  return knex("suppliers").where({ supplier_id: supplierId }).del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
