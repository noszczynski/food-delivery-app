import {Order} from "../src/models/Order.js";
import {connection} from "../src/database/connection.js";

const orders = await Order.query().withGraphFetched("[user, restaurant, products, delivery]");

await connection.destroy();

console.log(orders);

console.log(JSON.stringify(orders, null, 4));