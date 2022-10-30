import {connection} from "../src/database/connection.js";
import {Order} from "../src/models/Order.js";

const orders = await Order.query().withGraphFetched("user");

await connection.destroy();

console.log(orders);