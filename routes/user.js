const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/User')

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
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.get('/',(req,res)=>{
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
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.post('/',async (req,res)=>{
  try{
    User.create({
      name: req.body.name,
      age: req.body.age,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password,10),
    },(err,user)=>{
      if(user){
        user.password = undefined
        res.status(201).json({
          status: true,
          data: user
        })
      }else{
        res.status(400).json({
          status: false,
          message: err.message
        })
      }
    })
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.patch('/:id',async (req,res)=>{
  try{
    let id = req.params.id
    if(req.body.password) req.body.password = await bcrypt.hash(req.body.password,10)
    User.findByIdAndUpdate(id,{
      $set: req.body
    },async (err,user)=>{
      if(user){
        res.status(200).json({
          status: true,
          data: await User.findById(id).select('-password')
        })
      }else{
        res.status(404).json({
          status: false,
          message: "user not found !"
        })
      }
    })
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.delete('/:id',(req,res)=>{
  try{
    let id = req.params.id
    User.findById(id,async (err,user)=>{
      if(user){
        res.status(200).json({
          status: true,
          message: "success delete user !",
          data: await User.findByIdAndRemove(id).select('-password')
        })
      }else{
        res.status(404).json({
          status: false,
          message: "user not found !",
        })
      }
    })
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

module.exports = router