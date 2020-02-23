'use strict';
const {Cart}=require('../models/Cart.js')

class CartController{

	registerAProduct(req,res){
		const productId=req.params.id


		const cart= new Cart(req.user.id,productId,1)

		cart.registerAProduct()
		.then(function(){res.status(200).json('successful cart product registration')})
		.catch(e => console.error(e.stack))
	}

	getAllProductsFromACart(req,res){
		const cart= new Cart

		cart.getAllProductsFromACart(req.user.id)
		.then(function(cart){res.send({cart:cart})})
		.catch(e => console.error(e.stack))
	}

	getPermissionToAddToCart(req,res){
		const cart= new Cart

		cart.getPermissionToAddToCart(req.user.id,req.params.productId)
		.then(function(permission){
			res.send({permission:permission})
		})
		.catch(e => console.error(e.stack))

	}
}

module.exports={CartController}
