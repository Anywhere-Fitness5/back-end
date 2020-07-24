const db = require("../database/config");

function add(user) {
  return db("users")
    .insert(user, "id")
    .then((ids) => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("users")
    .select("id", "username", "email", "isInstructor")
    .orderBy("id");
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password", "email", "isInstructor")
    .where(filter);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};
