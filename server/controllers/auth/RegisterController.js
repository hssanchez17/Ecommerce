const {hashPassword}=require('../../config/password')
const {User}=require('../../models/User.js')

const register= async(req,res)=>{
    let {name,lastName,email,phone,password,address}=req.body
    password= await hashPassword(password)

    const user= new User(name,lastName,email,phone,password,address,password)
    console.log (await user.create())
    //if(user.create())res.status(200).json('registro Exitoso')
    //res.send({user:user})
}

module.exports={
    register
}