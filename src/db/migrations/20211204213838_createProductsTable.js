exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary(); // Sets `product_id` as the primary key
    table.string("product_sku");
    table.string("product_name");
    table.text("product_description");
    table.integer("product_quantity_in_stock");
    table.decimal("product_weight_in_lbs");
    table.integer("supplier_id").unsigned().notNullable();
    // Links the product to the supoplier table
    table
      .foreign("supplier_id")
      .references("supplier_id")
      .inTable("suppliers")
      .onDelete("cascade"); // If the supplier is deleted, also deletes all products that are associated with the supplier
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
