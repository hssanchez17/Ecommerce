const {hashPassword}=require('../../config/password')
const {database}=require('../../config/database')

const register= async(req,res)=>{
    let {name,lastName,email,phone,password,address}=req.body
    password= await hashPassword(password)
    const text = 'INSERT INTO "Users" (name, email,phone,password,address,"lastName") VALUES ($1, $2, $3, $4, $5,$6)'
    const values = [name, email,phone,password,address,lastName]

    database.query(text, values)
    .then(function(){res.status(200).json('registro Exitoso')})
    .catch(e => console.error(e.stack))
}

module.exports={
    register
}