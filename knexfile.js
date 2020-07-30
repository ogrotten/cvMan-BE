require("dotenv").config();

module.exports = {

	development: {
		client: "pg",
		connection: process.env.DATABASE_URL_DEV,
		useNullAsDefault: true,
		migrations: {
			directory: "./database/migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},

	testing: {
		client: "pg",
		connection: process.env.DATABASE_URL_TEST,
		useNullAsDefault: true,
		migrations: {
			directory: "./database/migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};