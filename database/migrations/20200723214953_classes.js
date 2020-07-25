exports.up = function (knex) {
  return knex.schema.createTable("class", (tbl) => {
    tbl.increments();
    tbl.string("name", 255).notNullable().index();
    tbl.string("type", 255).notNullable();
    tbl.string("startTime").notNullable().index();
    tbl.float("duration", 255).notNullable();
    tbl.string("intensity", 255).notNullable().index();
    tbl.string("location", 255).notNullable().index();
    tbl.integer("numberOfRegisteredAttendees").defaultTo(0);
    tbl.integer("maxClassSize", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("class");
};
