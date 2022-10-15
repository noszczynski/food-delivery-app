import {knex} from "../src/database/connection.js";

try {
	const result = await knex("restaurants2").where("id", 2).del();
	console.log(result);

} catch (error) {
	console.error(error);
}

await knex.destroy();
