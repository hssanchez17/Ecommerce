'use strict';
const {TypeOfProduct}=require('../models/TypeOfProduct.js')

class TypeOfProductController{


	create(req,res){
		  const {title,description}=req.body

		  const typeOfProduct =new TypeOfProduct();

		  typeOfProduct.create(title,description)
		  .then(function(){res.status(200).json('successful type of product registration')})
		  .catch(e => console.error(e.stack))

	}

	getAll(req,res){
		const typeOfProduct =new TypeOfProduct();
		typeOfProduct.getAll()
		.then(function(typeOfProducts){ res.status(200).json({typeOfProducts:typeOfProducts})})
		.catch(e => console.error(e.stack))
	}

	get(req,res){
		const id=req.params.id
		const typeOfProduct =new TypeOfProduct();
		typeOfProduct.get(id)
		.then(function(typeOfProduct){ 
			if(typeOfProduct==null) res.status(200).json("Error:that product doesn't exsist")
	    	else  res.send(typeOfProduct)
		})
		.catch(e => console.error(e.stack))

	}

	update(req,res){
		const {title,description}=req.body
		const id=req.params.id
		const typeOfProduct =new TypeOfProduct();
		
		typeOfProduct.update(id,title,description)
		.then(function(typeOfProduct){res.status(200).json('successful typeOfProduct update')})
		.catch(e => console.error(e.stack))

	}


}

module.exports={TypeOfProductController}