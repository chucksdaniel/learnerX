// Update with your config settings.
const dotenv = require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "mysql",
		connection: {
			host: process.env.DB_HOST || "127.0.0.1",
			user: process.env.DB_USER || " account_admin",
			password: process.env.DB_PASS || "iamasonofGod@1",
			database: process.env.DB_NANE || "Account",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "mysql",
		connection: {
			database: process.env.DB_HOST | "account",
			// user: "admin",
			// password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
