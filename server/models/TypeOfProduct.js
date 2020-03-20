'use strict';
const {database}=require('../config/database')


class TypeOfProduct{
	create(title,description){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO typeofproduct(title,description) VALUES ($1, $2)'
	    	const values = [title,description]

	    	database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
			
		})
	}

	getAll(){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM typeOfproduct'
			database.query(query)

			.then(function(response){
				const typeOfproducts=response.rows
				resolve(typeOfproducts)
			})
			.catch(e => console.error(e.stack))

		})
	}

	get(id){
		return new Promise((resolve, reject) => {
			const query='SELECT * FROM typeOfproduct WHERE id=$1'
			const value = [id]

			database.query(query, value)
		    .then(response => {
		    	const typeOfproduct=response.rows[0]
		    	resolve(typeOfproduct)
		    })

		})
	}

	update(id,title,description){
		return new Promise((resolve, reject) => {
			const query='UPDATE typeOfproduct SET title=$1,description=$2 WHERE id=$3'
			const values = [title,description,id]

			database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
		})

	}






}

module.exports={TypeOfProduct}