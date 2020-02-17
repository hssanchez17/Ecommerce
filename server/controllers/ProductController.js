const {database}=require('../config/database')
const cloudinary = require('../middlewares/cloudinary');

const create= async(req,res)=>{
	cloudinary.uploadImage(req.file)
	.then(function(result){
	    const {title,description,price,stock}=req.body
	    const imageUrl=result.url
	    const public_id= result.public_id
	    const text = 'INSERT INTO products(title,description,price,stock,imageUrl,public_id) VALUES ($1, $2, $3, $4, $5, $6)'
	    const values = [title,description,price,stock,imageUrl,public_id]

	    database.query(text, values)
		.then(function(){res.status(200).json('successful product registration')})
		.catch(e => console.error(e.stack))
	})
	.catch(err => res.status(400).json('Error: ' + err));
}

const getAll=async(req,res)=>{
	const text='SELECT * FROM products'
	
	database.query(text)
	.then(function(response){
		const products=response.rows
		res.send({products:products})
	})
	.catch(e => console.error(e.stack))

}

module.exports={
    create,
    getAll
}