require("dotenv").config;

const knex = require("knex");
const knexfile = require("../knexfile.js");
const environment = process.env.DATABASE_URL_DEV || "development";

module.exports = knex(knexfile[environment]);