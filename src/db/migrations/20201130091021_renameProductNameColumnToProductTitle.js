exports.up = function (knex) {
  return knex.schema.table("products", table => {
    table.renameColumn("product_name", "product_title");
  });
};

exports.down = function (knex) {
  return knex.schema.table("products", table => {
    table.renameColumn("product_title", "product_name");
  });
};
