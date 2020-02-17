const { body, validationResult } = require('express-validator')
const {database}=require('../../config/database')



const userValidationRules = () => {
  return [
    body('email').isEmail().custom(email=>{
      const text='SELECT * FROM users WHERE email=$1'
      const values = [email]

       database.query(text, values)
      .then(response => {
        const user=response.rows[0]
        console.log(user)
        if (!user) return Promise.resolve()
        else return Promise.reject('Email already registered')
      });

    }),
    body('password').isLength({ min: 5 }),
  ]
}

const validate = async(req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) return next()
  const extractedErrors = []

  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({errors: extractedErrors,})
}

module.exports = {
  userValidationRules,
  validate,
}