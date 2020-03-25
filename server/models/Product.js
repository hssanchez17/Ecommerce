'use strict';
const {database}=require('../config/database')

class Product{


	create(title,description,price,stock,imageUrl,public_id){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO products(title,description,price,stock,imageUrl,public_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id'
	    	const values = [title,description,price,stock,imageUrl,public_id]

	    	database.query(query, values)
			.then(function(response){
				const id=response.rows[0].id
				resolve(id)
			})
			.catch(e => console.error(e.stack))
			
		})
	}

	get(id){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM products WHERE id=$1'
			const value = [id]

			database.query(query, value)
		    .then(response => {
		    	const product=response.rows[0]
		    	resolve(product)
		    })

		})
	}

	getAll(){
		return new Promise((resolve, reject) => {
			/*remember change the query hermes...*/
			const query='SELECT * FROM products ORDER BY id DESC;'
			database.query(query)

			.then(function(response){
				const products=response.rows
				resolve(products)
			})
			.catch(e => console.error(e.stack))

		})
	}

	getTheFirst3(){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM products ORDER BY id DESC LIMIT 3;'
			database.query(query)

			.then(function(response){
				const products=response.rows
				resolve(products)
			})
			.catch(e => console.error(e.stack))

		})
	}

	update(id){
		return new Promise((resolve, reject) => {
			const query='UPDATE products SET title=$1,description=$2,price=$3,stock=$4 WHERE id=$5'
			const values = [this.title,this.description,this.price,this.stock,id]

			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
		})

	}

	updateStock(id,quantity){
		return new Promise((resolve, reject) => {
			const query='UPDATE products SET stock=stock-$1 WHERE id=$2'
			const values=[quantity,id]

			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))

		})
	}


	destroy(id){
		return new Promise((resolve, reject) => {
			const query= 'DELETE FROM products WHERE id=$1'
			const values=[id]
			
			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
		})
	}
	associateAProductWithItsType(productId,typeOfProductId){

		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO products_typeOfProducts(productId,typeOfProductId) VALUES ($1, $2)'
			const values=[productId,typeOfProductId]
			
			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))


		})

	}

}

module.exports={Product}