const express = require('express')
const { validationResult } = require('express-validator')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')
const Candidate = require('../../models/Candidate')
const {internalServerError} = require('./response')
const { editUserValidator, changePasswordValidator } = require('../validators/userValidators')

// get all users
router.get('/all',(req,res)=>{
  try{
    let {page,perpage,sort} = req.query
    sort = sort == 'desc' ? -1 : 1
    User.paginate({},{
      pagination: page=="all" ? false : true,
      select: "-password",
      page: page ? parseInt(page,10) : 1,
      limit: perpage ? parseInt(perpage,10) : 10,
      sort: {
        name: parseInt(sort)
      }
    }).then(result=>{
      res.status(200).json({
        status: true,
        ...result
      })
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// get user by username (query)
router.get('/',async(req,res)=>{
  try{
    let { username } = req.query
    let user = await User.findOne({username,isActive:true})
    if(user && user.isActive){
      res.status(200).json({
        status: true,
        data: user
      })
    }else{
      res.status(400).json({
        status: false,
        message: 'User not found.'
      })
    }
  }catch(err){
    internalServerError(err,res)
  }
})

// get user by id (param)
router.get('/:id',(req,res)=>{
  try{
    let id = req.params.id
    User.findById(id,'-password').exec((err,user)=>{
      if(user){
        res.status(200).json({
          status: true,
          data: user
        })
      }else{
        res.status(404).json({
          status: false,
          message: "user not found !",
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// edit user profile by id
router.patch('/:id/profile', editUserValidator ,async (req,res)=>{
  try{
    // if validation failed
    let errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        status:false,
        message: 'Inputs not valid.',
        errors: errors.array({onlyFirstError:true})
      })
    }
    // if validation has been successful
    let id = req.params.id
    User.findById(id).exec(async(err,user)=>{
      if(user){
        let { name,age,username,email } = req.body
        User.findByIdAndUpdate(id,{ name,age,username,email })
          .exec(async(err,user)=>{
            return res.status(200).json({
              status: true,
              message: 'User updated.',
              data: await User.findById(user._id).select('-password')
            })
          })
      }else{
        return res.status(400).json({
          status: false,
          message: 'User not found.'
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// change password by id
router.patch('/:id/password', changePasswordValidator ,async (req,res)=>{
  try{
    // if validation failed
    let errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({
        status:false,
        message: 'Inputs not valid.',
        errors: errors.array({onlyFirstError:true})
      })
    }
    // if validation has been successful
    let id = req.params.id
    User.findById(id).exec(async(err,user)=>{
      let { oldPassword,newPassword } = req.body
      if(user && await bcrypt.compare(oldPassword,user.password)){
        const password = await bcrypt.hash(newPassword,10) 
        User.findByIdAndUpdate(id,{ password })
          .exec(async(err,user)=>{
            return res.status(200).json({
              status: true,
              message: 'Password updated.',
            })
          })
      }else{
        return res.status(400).json({
          status: false,
          message: 'Old password incorrect.'
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// delete user by id
router.delete('/:id',(req,res)=>{
  try{
    let id = req.params.id
    User.findById(id,async(err,user)=>{
      if(user){
        if(user.isCandidate){
          Candidate.findOneAndDelete({user:user._id})
        }
        User.findByIdAndRemove(id)
          .exec(()=>{
            res.status(200).json({
              status: true,
              message: "User deleted."
            })
          })
      }else{
        res.status(404).json({
          status: false,
          message: "User not found.",
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

module.exports = router