import Knex from "knex";
import knexfile from "../../knexfile.js";
import {knexSnakeCaseMappers, Model} from "objection";

const env = process.env.NODE_ENV || "development";

export const connection = Knex({
	...knexfile[env],
	...knexSnakeCaseMappers()
});

Model.knex(connection);