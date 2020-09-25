const { body } = require("express-validator");
const User = require("../../models/User");

const userValidator = {
  editUserValidator: [
    body('name')
      .notEmpty().withMessage('Name is required.'),
    body('age')
      // .custom(age=>/^[0-9]+$/.test(age)).withMessage('Age must be a positive integer.')
      .custom(age=>age!=null ? age > 0 : true).withMessage('Age not valid.'),
    body('username')
      .notEmpty().withMessage('Username is required.')
      .isAlphanumeric().withMessage('Username is only letters and numbers.')
      .custom((username,{req}) => {
        return User.findOne({
          $and: [{ username },{ username: { $ne: req.header('old-username') } }]
        }).then(user => {
          if (user) {
            return Promise.reject('Username already used.');
          }
        })
      }),
    body('email')
      .notEmpty().withMessage('Email is required.')
      .isEmail().withMessage('Email not valid.')
      .custom((email,{req}) => {
        return User.findOne({
          $and: [{ email },{ email: { $ne: req.header('old-email') } }]
        }).then(user => {
          if (user) {
            return Promise.reject('Email already used.');
          }
        })
      }),
  ],
  changePasswordValidator: [
    body('oldPassword')
      .notEmpty().withMessage('Old Password is required.'),
    body('newPassword')
      .notEmpty().withMessage('New Password is required.')
      .isLength({min:8}).withMessage('New Password must be at least 8 characters long.')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])./).withMessage('New Password must contain lowercase, uppercase, and number.'),
    body('confirmPassword')
      .custom((confirmPassword,{req})=>confirmPassword==req.body.newPassword).withMessage('Confirm Password doesn\'t match.')
  ]
}

module.exports = userValidator