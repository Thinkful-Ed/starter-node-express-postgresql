const knex = require("../db/connection");

const suppliers = knex("suppliers");

const createSupplier = supplier => suppliers.insert(supplier).returning("*");

const getSupplierById = supplierId =>
  suppliers.select("*").where({ supplier_id: supplierId }).first();

const updateSupplierById = (supplierId, updatedSupplier) =>
  suppliers
    .select("*")
    .where({ supplier_id: supplierId })
    .update(updatedSupplier, "*");

const deleteSupplierById = supplierId =>
  suppliers.where({ supplier_id: supplierId }).del();

module.exports = {
  createSupplier,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById,
};
