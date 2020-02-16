const {database}=require('../config/database')

const create= async(req,res)=>{
    let {name,quantity,description}=req.body
    const text = 'INSERT INTO products(name,quantity,description) VALUES ($1, $2, $3)'
    const values = [name,quantity,description]

    database.query(text, values)
    .then(function(){res.status(200).json('successful product registration')})
    .catch(e => console.error(e.stack))
}

module.exports={
    create
}