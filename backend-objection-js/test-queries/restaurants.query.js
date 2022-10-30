import {connection} from "../src/database/connection.js";
import {Restaurant} from "../src/models/Restaurant.js";

const restaurants = await Restaurant.query();
await connection.destroy();

console.log(restaurants);

export default restaurants;