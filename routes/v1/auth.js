const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { checkAuthToken, checkResetToken } = require('../../middleware/authMiddleware')
const User = require('../../models/User')
const { validationResult } = require('express-validator')
const { registerValidator } = require('../validators/authValidators')
const internalServerError = require('./internalServerError')

// login user
router.post('/login', async (req,res) => {
  try{
    let { username, password } = req.body
    let user = await User.findOne({
      $or: [{ username },{ email: username }]
    })
    if(user && await bcrypt.compare(password,user.password)){
      if(user.isActive){
        let { id, username } = user
        let token = jwt.sign({ id, username, type: 'auth' }, process.env.SECRET_KEY,{expiresIn:"1 days"})
        return res.status(200).json({
          status: true,
          message: 'Login success.',
          token
        })
      }else{
        return res.status(400).json({
          status: false,
          message: 'You are not active yet.',
        })
      }
    }else{
      return res.status(400).json({
        status: false,
        message: 'Email or Password is incorrect.'
      })
    }
  }catch(err){
    internalServerError(err,res)
  }
})

// register user
router.post('/register',registerValidator,async(req,res)=>{
  try{
    // if validation failed
    let errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        success:false,
        errors: errors.array({onlyFirstError:true})
      })
    }
    // if validation has been successful
    let user = req.body
    user.password = await bcrypt.hash(user.password,10)
    User.create(user,async(err,user)=>{
      if(user){
        res.status(201).json({
          status: true,
          data: await User.findById(user._id,'-password')
        })
      }else{
        res.status(400).json({
          status: false,
          message: err.message
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// check token
router.get('/', checkAuthToken, async (req,res) => {
  try{
    let user = await User.findById(req.user.id).select('-password')
    return res.status(200).json({
      status: true,
      data: user
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// forgot password
router.post('/forgot-password', async (req,res) => {
  try{
    let { email } = req.body
    let user = await User.findOne({email})
    if(user){
      // create jwt for reset password
      let { id, username } = user
      let token = jwt.sign({ id, username, type: 'reset-password' }, process.env.SECRET_KEY,{expiresIn:60*30})
      // send email
      return res.status(200).json({
        status: true,
        message: 'We\'ve sent you an email with a link to reset your password',
        token
      })
    }else{
      return res.status(400).json({
        status: false,
        message: 'user with this email not found'
      })
    }
  }catch(err){
    internalServerError(err,res)
  }
})

// check reset token
router.get('/check-reset-token', checkResetToken, async (req,res) => {
  try{
    res.status(200).json({
      status: true,
      message: 'token valid'
    })
  }catch(err){
    internalServerError(err,res)
  }
})

router.post('/reset-password', checkResetToken, async (req,res) => {
  try{
    const { password, confirmPassword } = req.body
    console.log(password)
    return res.status(200).json({
      status: true,
      message: 'success reset password, please login with your new password'
    })
  }catch(err){
    internalServerError(err,res)
  }
})

module.exports = router