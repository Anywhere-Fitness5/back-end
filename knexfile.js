require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: { directory: "./database/seeds" },
  },

  testing: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: { directory: "./database/seeds" },
  },

  production: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: { directory: "./database/seeds" },
  },
};
