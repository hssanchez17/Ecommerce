'use strict';
const {database}=require('../config/database')

class Order{


	create(userId,productId,quantity){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO orders(userId,productId,quantity) VALUES ($1, $2, $3)'
	    	const values = [userId,productId,quantity]

	    	database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
			
		})
	}

	removeAllProductsFromAllOrdersForDestructionOfAProduct(productId){
		return new Promise((resolve, reject) => {
			const query= 'DELETE FROM orders WHERE productId=$1'
			const values=[productId]
			
			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
		})

	}

	getAll(userId){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM orders JOIN products ON orders.productId=products.id and orders.userId=$1;'
			const values=[userId]
			
			database.query(query,values)
			.then(function(response){
				const orders=response.rows
				resolve(orders)
			})
			.catch(e => console.error(e.stack))

		})
	}
}

module.exports={Order}