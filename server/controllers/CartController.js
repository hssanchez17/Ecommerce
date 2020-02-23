'use strict';
const {Cart}=require('../models/Cart.js')

class CartController{

	registerAProduct(req,res){
		const productId=req.params.id
		const cart= new Cart(req.user.id,productId,1)
		cart.create()
		.then(function(){res.status(200).json('successful cart product registration')})
		.catch(e => console.error(e.stack))
	}
}

module.exports={CartController}