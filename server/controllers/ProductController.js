const {database}=require('../config/database')
const cloudinary = require('../middlewares/cloudinary');

const create= async(req,res)=>{
	cloudinary.uploadImage(req.file)
	.then(function(result){
	    const {title,description,price,stock}=req.body
	    const imageUrl=result.url
	    const text = 'INSERT INTO products(title,description,price,stock,imageUrl) VALUES ($1, $2, $3, $4, $5)'
	    const values = [title,description,price,stock,imageUrl]

	    database.query(text, values)
		.then(function(){res.status(200).json('successful product registration')})
		.catch(e => console.error(e.stack))
	})
	.catch(err => res.status(400).json('Error: ' + err));
}

module.exports={
    create
}