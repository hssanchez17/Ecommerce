'use strict';
const {database}=require('../config/database')


class User{
	constructor(name,lastName,email,phone,password,address){
		this.name=name;
		this.lastName=lastName;
		this.email=email;
		this.phone=phone;
		this.password=password;
		this.address=address;
	}

	create(){

    	return new Promise((resolve, reject) => {
        	const text = 'INSERT INTO users(name, email,phone,password,address,lastName) VALUES ($1, $2, $3, $4, $5,$6)'
    		const values = [this.name, this.email,this.phone,this.password,this.address,this.lastName]

         	database.query(text, values)
           .then(function(){resolve(true)})
           .catch(e => console.error(e.stack))
      
       	})
    }	
}



module.exports={User}
