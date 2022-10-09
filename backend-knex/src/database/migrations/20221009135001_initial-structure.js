/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema
		.createTable("users", table => {
			table.increments("id").primary();
		})
		.createTable("restaurants", table => {
			table.increments("id").primary();
		});   
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  
}
