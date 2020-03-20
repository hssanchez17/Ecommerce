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





}

module.exports={TypeOfProduct}