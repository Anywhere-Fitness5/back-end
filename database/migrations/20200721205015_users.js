exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("username", 255).notNullable().unique();
    table.string("password", 255).notNullable();
    tbl.boolean("isInstructor");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

exports.config = { transaction: false };
