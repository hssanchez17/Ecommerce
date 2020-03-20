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

}

module.exports={TypeOfProductController}