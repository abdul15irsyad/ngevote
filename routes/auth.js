const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { checkCredential } = require('../middleware/authMiddleware')

const User = require('../models/User')

router.post('/', async (req,res)=>{
  try{
    let { username, password } = req.body
    let user = await User.findOne({username})
    if(user && await bcrypt.compare(password,user.password)){
      let { id, username } = user
      let token = jwt.sign({ id, username }, process.env.SECRET_KEY,{expiresIn:"1 days"})
      return res.status(200).json({
        status: true,
        message: 'login success',
        token
      })
    }else{
      return res.status(400).json({
        status: false,
        message: 'invalid credential'
      })
    }
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.get('/', checkCredential, async (req,res)=>{
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

module.exports = router