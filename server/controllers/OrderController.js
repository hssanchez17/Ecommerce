'use strict';
const {Order}=require('../models/Order.js')
const {Product}=require('../models/Product.js')
const {Cart}=require('../models/Cart.js')

class OrderController{
	create(req,res){

		const productId=req.params.productId
		const {quantity}=req.body

		
		const order= new Order(req.user.id,productId,quantity)
		const product= new Product

		order.create()
		.then(function(){
			product.updateStock(productId,quantity)
			.then(function(){
				res.status(200).json('successful order registration')	
			})
		})
		.catch(e => console.error(e.stack))

	}


	createAnOrderFromTheCart(req,res){
		const productId=req.params.productId
		const {quantity}=req.body

		
		const order= new Order(req.user.id,productId,quantity)
		const product= new Product
		const cart=new Cart

		order.create()
		.then(function(){
			product.updateStock(productId,quantity)
			.then(function(){
				cart.removeAProductFromTheCart(productId,req.user.id)
				.then(function(){
					res.status(200).json('successful order registration')
				})
			})
		})
		.catch(e => console.error(e.stack))
	}

}


module.exports={OrderController}