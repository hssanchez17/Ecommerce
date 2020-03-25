'use strict';
const {Order}=require('../models/Order.js')
const {Product}=require('../models/Product.js')
const {Cart}=require('../models/Cart.js')

class OrderController{
	create(req,res){

		const productId=req.params.productId
		const {quantity}=req.body

		
		const order= new Order()
		const product= new Product()


		const p1=order.create(req.user.id,productId,quantity)
		const p2=product.updateStock(productId,quantity)

		Promise.all([p1, p2])
		.then(function(){res.status(200).json('successful order registration')})
		.catch(e => console.error(e.stack))
	}


	createAnOrderFromTheCart(req,res){
		const productId=req.params.productId
		const {quantity}=req.body

		
		const order= new Order(req.user.id,productId,quantity)
		const product= new Product()
		const cart=new Cart()

		const p1=order.create()
		const p2=product.updateStock(productId,quantity)
		const p3=cart.removeAProductFromTheCart(productId,req.user.id)

		Promise.all([p2, p1,p3])
		.then(function(){res.status(200).json('successful order registration')})
		.catch(e => console.error(e.stack))
	}


	getAllOrders(req,res){
		const order= new Order()

		order.getAll(req.user.id)
		.then(function(orders){res.send({orders:orders})})
		.catch(e => console.error(e.stack))
	}

}


module.exports={OrderController}