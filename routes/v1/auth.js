const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { checkAuthToken, checkResetToken } = require('../../middleware/authMiddleware')

const User = require('../../models/User')

router.post('/', async (req,res) => {
  try{
    let { username, password } = req.body
    let user = await User.findOne({
      $or: [{ username },{ email: username }]
    })
    if(user && await bcrypt.compare(password,user.password)){
      let { id, username } = user
      let token = jwt.sign({ id, username, type: 'auth' }, process.env.SECRET_KEY,{expiresIn:"1 days"})
      return res.status(200).json({
        status: true,
        message: 'login success',
        token
      })
    }else{
      return res.status(400).json({
        status: false,
        message: 'Username or Password is incorrect.'
      })
    }
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.get('/', checkAuthToken, async (req,res) => {
  try{
    let user = await User.findById(req.user.id).select('-password')
    return res.status(200).json({
      status: true,
      data: user
    })
  }catch(err){
    return res.status(400).json({
      status: false,
      error: err.message
    })
  }
})

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
    return res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.get('/check-token', checkResetToken, async (req,res) => {
  try{
    res.status(200).json({
      status: true,
      message: 'token valid'
    })
  }catch(err){
    return res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
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
    return res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

module.exports = router