const knex = require("../db/connection");

const list = () => {
  return knex("categories").select("*");
};

module.exports = { list };
