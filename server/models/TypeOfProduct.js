'use strict';
const {database}=require('../config/database')


class TypeOfProduct{
	constructor(title,description){
		this.title=title;
		this.description=description;
	}

	create(){
		return new Promise((resolve, reject) => {
			const query = 'INSERT INTO typeofproduct(title,description) VALUES ($1, $2)'
	    	const values = [this.title,this.description]

	    	database.query(query, values)
			.then(function(){resolve(true)})
			.catch(e => console.error(e.stack))
			
		})
	}





}

module.exports={Product}