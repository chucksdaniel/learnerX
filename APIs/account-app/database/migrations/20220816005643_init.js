/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("account", (table) => {
		table.increments("id");
		table.string("email").notNullable().unique();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.integer("account_number").notNullable();
		table.string("password").notNullable();
		table.float("balance").defaultTo(0.0);
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("account");
};
