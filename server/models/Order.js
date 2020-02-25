'use strict';
const {database}=require('../config/database')

class Order{
	constructor(userId,productId,quantity){
		this.userId=userId;
		this.productId=productId;
		this.quantity=quantity
	}

	create(){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO orders(userId,productId,quantity) VALUES ($1, $2, $3)'
	    	const values = [this.userId,this.productId,this.quantity]

	    	database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
			
		})
	}
}

module.exports={Order}