exports.up = function (knex) {
  return knex.schema.createTable("products_categories", table => {
    table.integer("product_id").unsigned().notNullable();
    table.foreign("product_id").references("product_id").inTable("products");

    table.integer("category_id").unsigned().notNullable();
    table
      .foreign("category_id")
      .references("category_id")
      .inTable("categories");

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products_categories");
};
