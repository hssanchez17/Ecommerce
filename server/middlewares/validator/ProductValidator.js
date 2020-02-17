const { body, validationResult } = require('express-validator')

const productValidationRules = () => {
  return [
    body('title')
      .not().isEmpty().withMessage("It can't be empty"),
    body('description')
      .not().isEmpty().withMessage("It can't be empty"),
    body('imageUrl')
      .not().isEmpty().withMessage("It can't be empty"),
    body('stock')
      .isInt().withMessage("It should be integer")
      .not().isEmpty().withMessage("It can't be empty"),
    body('price')
      .isInt().withMessage("It should be integer")
      .not().isEmpty().withMessage("It can't be empty"),

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