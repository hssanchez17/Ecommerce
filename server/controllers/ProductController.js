'use strict';
const cloudinary = require('../middlewares/cloudinary');
const {Product}=require('../models/Product.js')

class ProductController{

	create(req,res){
		cloudinary.uploadImage(req.file)
		.then(function(result){
		    const {title,description,price,stock}=req.body
		    const imageUrl=result.url
		    const public_id= result.public_id


		    const product= new Product(title,description,price,stock,imageUrl,public_id)
			product.create()
			.then(function(){res.status(200).json('successful product registration')})
			.catch(e => console.error(e.stack))
		})

		.catch(err => res.status(400).json('Error: ' + err));
	}

	getAll(req,res){
		const product= new Product
		product.getAll()
		.then(function(products){ res.status(200).json({products:products})})
		.catch(e => console.error(e.stack))
	}

	get(req,res){
		const id=req.params.id
		const product= new Product

		product.get(id)
		.then(function(product){
			if(product==null) res.status(200).json("Error:that product doesn't exsist")
	    	else  res.send(product)
		})
	}
}

module.exports={ProductController}