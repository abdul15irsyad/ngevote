const { body } = require('express-validator')
const User = require('../../models/User')

const authValidator = {
  registerValidator: [
    body('name')
      .notEmpty().withMessage('Name is required.'),
    body('age')
      // .custom(age=>/^[0-9]+$/.test(age)).withMessage('Age must be a positive integer.')
      .custom(age=>age!=null?age>0:true).withMessage('Age not valid.'),
    body('username')
      .notEmpty().withMessage('Username is required.')
      .isAlphanumeric().withMessage('Username is only letters and numbers.')
      .custom(username => {
        return User.findOne({username}).then(user => {
          if (user) {
            return Promise.reject('Username already used.');
          }
        })
      }),
    body('email')
      .notEmpty().withMessage('Email is required.')
      .isEmail().withMessage('Email not valid.')
      .custom(email => {
        return User.findOne({email}).then(user => {
          if (user) {
            return Promise.reject('Email already used.');
          }
        })
      }),
    body('password')
      .notEmpty().withMessage('Password is required.')
      .isLength({min:8}).withMessage('Password must be at least 8 characters long.')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])./).withMessage('Password must contain lowercase, uppercase, and number.'),
    body('confirmPassword')
      .custom((confirmPassword,{req})=>confirmPassword==req.body.password).withMessage('Confirm Password doesn\'t match.')
  ],
  resetPasswordValidator: [
    body('password')
      .notEmpty().withMessage('Password is required.')
      .isLength({min:8}).withMessage('Password must be at least 8 characters long.')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])./).withMessage('Password must contain lowercase, uppercase, and number.'),
    body('confirmPassword')
      .custom((confirmPassword,{req})=>confirmPassword==req.body.password).withMessage('Confirm Password doesn\'t match.')
  ]
}

module.exports = authValidator