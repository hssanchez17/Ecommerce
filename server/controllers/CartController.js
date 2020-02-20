const {database}=require('../config/database')


const create= async(req,res)=>{
	const userId=1
	const text = 'INSERT INTO carts(userId) VALUES ($1)'
	const values=[userId]

	database.query(text, values)
	.then(function(){res.status(200).json('successful cart creation')})
	.catch(e => console.error(e.stack))
}

const addProduct= async(req,res)=>{
	const {userId,productId,quantity}=req.body
	const text = 'INSERT INTO cartproducts(userId,productId,quantity) VALUES ($1,$2,$3)'
	const values=[userId,productId,quantity]

	database.query(text, values)
	.then(function(){res.status(200).json('Product added to cart')})
	.catch(e => console.error(e.stack))
}

const get=async(req,res)=>{
	const userId=req.user.id
	const text='SELECT Products.id,title,description,price,stock,imageUrl,public_id,quantity FROM cartproducts JOIN products ON cartproducts.productId=products.id and cartproducts.userId=$1'
	const values = [userId]
	
	 database.query(text, values)
	.then(function(response){
		const cart=response.rows
		res.send({cart:cart})
	})
	.catch(e => console.error(e.stack))
}

module.exports={
    create,
    addProduct,
    get
}
