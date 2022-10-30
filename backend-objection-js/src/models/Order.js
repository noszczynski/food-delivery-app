import { Model } from "objection";
import { Delivery } from "./Delivery.js";
import { Product } from "./Product.js";
import { Restaurant } from "./Restaurant.js";
import { User } from "./User.js";

export class Order extends Model {
	static tableName = "orders";
	// pole "fullPrice" wystąpi tylko przy zwróceniu JSON-a
	static virtualAttributes = ["fullPrice"];

	fullPrice() {
		if (Array.isArray(this.products)) {
			return this.products.reduce((price, product) => price + product.price, 0);
		}

		return null;
	}
 
	static relationMappings = {
		user: {
			relation: Model.BelongsToOneRelation,
			modelClass: User,
			join: {
				from: "orders.userId",
				to: "users.id"
			}
		},
		restaurant: {
			relation: Model.BelongsToOneRelation,
			modelClass: Restaurant,
			join: {
				from: "orders.restaurantId",
				to: "restaurants.id"
			}
		},
		products: {
			relation: Model.ManyToManyRelation,
			modelClass: Product,
			join: {
				from: "orders.id",
				through: {
					from: "orders_products.orderId",
					to: "orders_products.productId",
					// poniższy kod pozwala pobrać pole "price" z tabeli "orders_products" zamiast z tabeli "products"
					extra: ["price"]
				},
				to: "products.id"
			}
		},
		delivery: {
			relation: Model.HasOneRelation,
			modelClass: Delivery,
			join: {
				from: "orders.id",
				to: "deliveries.orderId"
			}
		}
	};
}
