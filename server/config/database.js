const {Pool}=require('pg')

const database= new Pool({
    user: 'root',
    host: 'localhost',
    database: 'Ecommerce',
    password: '123456789',
    port: 5432,
})

module.exports={
    database
}