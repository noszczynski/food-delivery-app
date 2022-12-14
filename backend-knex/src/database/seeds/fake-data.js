import bcrypt from "bcryptjs";

const generatePassword = () => bcrypt.hash("s4mpl3Pa55word", 10);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("restaurants").del();
	// await knex("products").del();
	// await knex("orders").del();
	// await knex("orders_products").del();
	// await knex("deliveries").del();

	await knex("users").insert([
		{
			id: 1,
			email: "admin@fooddelivery.com",
			password: await generatePassword(),
		},
		{
			id: 2,
			email: "user@fooddelivery.com",
			password: await generatePassword(),
		},
	]);

	await knex("restaurants").insert([
		{
			id: 1,
			name: "Na Guod Niaka",
			address: "sushi-street 23, 90023 Hutomaki",
			type: "SUSHI"
		},
		{
			id: 2,
			name: "Soo Fast",
			address: "4 Sixth Ave, Applecross WA 6153, Australia",
			type: "FAST FOOD"
		}
	]);

	await knex("products").insert([
		{
			id: 1,
			name: "Maki",
			description: "24 rolls",
			price: 89.2,
			restaurant_id: 1,
		},
		{
			id: 2,
			name: "Philadelphia Roll",
			description: "12 rolls",
			price: 122.0,
			restaurant_id: 1,
		},
		{
			id: 3,
			name: "Volcano ROll",
			description: "3 rolls",
			price: 22.5,
			restaurant_id: 1,
		},
		{
			id: 4,
			name: "Big burger",
			price: 30,
			restaurant_id: 2
		},
		{
			id: 5,
			name: "Fish burger",
			description: "With codfish",
			price: 40,
			restaurant_id: 2,
		}
	]);

	await knex("orders").insert([
		{
			id: 1,
			date: new Date(),
			user_id: 1,
			restaurant_id: 1,
		},
		{
			id: 2,
			date: new Date(),
			user_id: 2,
			restaurant_id: 2,
		}
	]);

	await knex("orders_products").insert([
		{
			order_id: 1,
			product_id: 1,
			price: 79.2,
		},
		{
			order_id: 1,
			product_id: 3,
			price: 12.5,
		},
		{
			order_id: 2,
			product_id: 5,
			price: 30,
		}
	]);

	await knex("deliveries").insert([
		{
			delivery_date: new Date(),
			order_id: 1
		},
		{
			delivery_date: new Date(),
			order_id: 2
		}
	]);
} 
