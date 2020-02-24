'use strict';
const {database}=require('../config/database')


class Cart{
	constructor(userId,productId,quantity){
		this.userId=userId;
		this.productId=productId;
		this.quantity=quantity
	}

	registerAProduct(){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO carts(userId,productId,quantity) VALUES ($1, $2, $3)'
	    	const values = [this.userId,this.productId,this.quantity]

	    	database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
			
		})
	}

	getAllProductsFromACart(id){
		return new Promise((resolve, reject) => {
			const text='SELECT Products.id,title,description,price,stock,imageUrl,public_id,quantity FROM carts JOIN products ON carts.productId=products.id and carts.userId=$1;'
			const values = [id]	
			 database.query(text, values)
			.then(function(response){
				const cart=response.rows
				resolve(cart)
			})
		})
	}

	getPermissionToAddToCart(userId,productId){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM carts WHERE userId=$1 AND productId=$2'
			const values=[userId,productId]

			database.query(query, values)
			.then(function(response){
				if(response.rows[0]==null)resolve(true)
				else resolve(false)
		
			})

		})

	}
}
module.exports={Cart}