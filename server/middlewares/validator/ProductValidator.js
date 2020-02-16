const { body, validationResult } = require('express-validator')

const productValidationRules = () => {
  return [
    body('name')
      .not().isEmpty().withMessage("It can't be empty"),
    body('quantity')
      .isInt().withMessage("It should be integer")
      .not().isEmpty().withMessage("It can't be empty")

  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) return next()
  const extractedErrors = []

  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({errors: extractedErrors,})
}

module.exports = {
  productValidationRules,
  validate,
}