
const bcrypt = require('bcryptjs');

async function hashPassword(passwordToHash){
    const salt= await bcrypt.genSalt(10)
    const password=await bcrypt.hash(passwordToHash,salt)
    return password 
}



module.exports={
    hashPassword
}