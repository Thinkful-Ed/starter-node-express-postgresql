exports.up = function (knex) {
  return knex.schema.createTable("suppliers", (table) => {
    table.increments("supplier_id").primary(); // sets supplier_id as the primary key
    table.string("supplier_name");
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");
    table.timestamps(true, true); // Adds `created_at` and `updated_at` columns;
    // passing `true` as the first argument sets the columns to be a timestamp type
    // while passing `true` as the second argument sets those columns to be non-nullable
    // and to use the current timestamp by default
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("suppliers");
};
