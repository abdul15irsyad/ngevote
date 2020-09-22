const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')
const Candidate = require('../../models/Candidate')
const internalServerError = require('./internalServerError')

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

// edit user by id
router.patch('/:id',async (req,res)=>{
  try{
    let _id = req.params.id
    User.findById(_id).exec(async(err,user)=>{
      if(user){
        let newUser = req.body
        if(newUser.newPassword){
          if(await bcrypt.compare(newUser.oldPassword,user.password)){
            newUser.password = await bcrypt.hash(newUser.newPassword,10)
          }else{
            return res.status(400).json({
              status: false,
              message: 'Old password incorrect.'
            })
          }
        }
        User.findByIdAndUpdate(_id,{ $set: newUser })
          .exec(async(err,user)=>{
            return res.status(200).json({
              status: true,
              data: await User.findById(_id).select('-password')
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
              message: "success delete user !"
            })
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

module.exports = router