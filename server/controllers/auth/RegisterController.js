const {hashPassword}=require('../../config/password')
const {User}=require('../../models/User.js')

const register= async(req,res)=>{
    let {name,lastName,email,phone,password,address}=req.body
    password= await hashPassword(password)

    const user= new User(name,lastName,email,phone,password,address,password,"user")
    user.create()
    .then(function(){res.status(200).json('success fulregistration')})
}

module.exports={
    register
}