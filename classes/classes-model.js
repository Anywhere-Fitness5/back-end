const db = require("../database/config");

module.exports = {
  getClasses,
  getClassById,
  addClass,
  updateClass,
  removeClass,
};

function getClasses() {
  return db("class");
}

function getClassById(id) {
  return db("class").where({ id }).first();
}

function addClass(data) {
  return db("class").insert(data);
}

function updateClass(id, data) {
  return db("class").where({ id }).update(data);
}

function removeClass(id) {
  return db("class").where({ id }).del();
}
