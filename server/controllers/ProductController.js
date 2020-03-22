'use strict';
const cloudinary = require('../middlewares/cloudinary');
const {Order}=require('../models/Order.js')
const {Product}=require('../models/Product.js')
const {Cart}=require('../models/Cart.js')

class ProductController{

	create(req,res){
		cloudinary.uploadImage(req.file)
		.then(function(result){
			console.log(req.body)
		    const {title,description,price,stock}=req.body
		    const imageUrl=result.url
		    const public_id= result.public_id


		    const product= new Product()
			product.create(title,description,price,stock,imageUrl,public_id)
			.then(function(){
				console.log(product)
				res.status(200).json('successful product registration')
			})
			.catch(e => console.error(e.stack))
		})

		.catch(err => res.status(400).json('Error: ' + err));
	}

	getAll(req,res){
		const product= new Product()
		product.getAll()
		.then(function(products){ res.status(200).json({products:products})})
		.catch(e => console.error(e.stack))
	}

	get(req,res){
		const id=req.params.id
		const product= new Product()

		product.get(id)
		.then(function(product){
			if(product==null) res.status(200).json("Error:that product doesn't exsist")
	    	else  res.send(product)
		})
		.catch(e => console.error(e.stack))
	}

	update(req,res){
		const {title,description,price,stock}=req.body
		const id=req.params.id
		const product= new Product(title,description,price,stock,'','')
		
		product.update(id)
		.then(function(product){res.status(200).json('successful product update')})
		.catch(e => console.error(e.stack))

	}

	destroy(req,res){
		const id=req.params.id
		const product= new Product()
		const order= new Order()
		const cart= new Cart()

		var p1=cart.removeAllProductsFromAllCartsForDestructionOfAProduct(id)
		var p2=order.removeAllProductsFromAllOrdersForDestructionOfAProduct(id)
		var p3=product.destroy(id)

		Promise.all([p1, p2, p3])
		.then(function(){res.status(200).json('successful product destroyed')})
		.catch(e => console.error(e.stack))

	}
}

module.exports={ProductController}