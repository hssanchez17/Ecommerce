const { body, validationResult } = require('express-validator')
const {database}=require('../../config/database')



const userValidationRules = () => {
  return [
    body('email')
      .isEmail()
      .custom(email => {
        return new Promise((resolve, reject) => {
          const text='SELECT * FROM users WHERE email=$1'
          const values = [email]

          database.query(text, values)
          .then(response => {
            const user=response.rows[0]
            if(Boolean(user)) reject(new Error('E-mail already in use'))
            resolve(true)
          })
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