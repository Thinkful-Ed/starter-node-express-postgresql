const knex = require("../db/connection");

// PRODUCTS - list queries ===============================================================

const list = () => {
  return knex("products").select("*");
};

const listOutOfStockCount = () => {
  return knex("products")
    .select("product_quantity_in_stock as out_of_stock")
    .count("product_id")
    .where({ product_quantity_in_stock: 0 })
    .groupBy("out_of_stock");
};

const listPriceSummary = () => {
  return knex("products")
    .select("supplier_id")
    .min("product_price")
    .max("product_price")
    .avg("product_price")
    .groupBy("supplier_id");
};

const listTotalWeightByProduct = () => {
  return knex("products")
    .select(
      "product_sku",
      "product_title",
      knex.raw(
        "sum(product_weight_in_lbs * product_quantity_in_stock) as total_weight_in_lbs"
      )
    )
    .groupBy("product_title", "product_sku");
};

const read = (product_id) => {
  return knex("products").select("*").where({ product_id }).first();
};

module.exports = {
  list,
  read,
  listOutOfStockCount,
  listPriceSummary,
  listTotalWeightByProduct,
};
