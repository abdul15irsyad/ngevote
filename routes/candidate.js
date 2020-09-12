const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Candidate = require('../models/Candidate')
const User = require('../models/User')

router.get('/',async(req,res)=>{
  try{
    let candidates = await Candidate.find().populate('user','-password -hashedPassword -_id')
    res.status(200).json({
      status: true,
      data: candidates
    })
  }catch(err){
    res.status(500).json({
      message:'interal server error !',
      error:err.message
    })
  }
})

router.get('/:id',async(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findById(id)
      .populate('user','-password -hashedPassword -_id')
      .exec((err,candidate)=>{
        if(candidate){
          res.status(200).json({
            status: true,
            data: candidate
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

router.post('/:id',async(req,res)=>{
  try{
    let id = req.params.id
    User.findById(id).exec((err,user)=>{
      if(!user){
        return res.status(404).json({
          status: false,
          message: `user not found`
        })
      }
    })
    let candidate = await Candidate.findOne({user:id}).populate('user','-password -hashedPassword -_id')
    if(candidate){
      return res.status(400).json({
        status: false,
        message: `${candidate.user.name} already a candidate`
      })
    }
    Candidate.create({
      user: id,
      motto: req.body.motto,
    },async(err,newCandidate)=>{
      if(newCandidate){
        res.status(201).json({
          status: true,
          data: await Candidate.findById(newCandidate._id).populate('user','-password -hashedPassword -_id')
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

router.patch('/:id',(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findByIdAndUpdate(id,{
      $set: req.body
    },async(err,candidate)=>{
      if(candidate){
        res.status(200).json({
          status: true,
          data: await Candidate.findById(id).populate('user','-password -hashedPassword -_id')
        })
      }else{
        res.status(404).json({
          status: false,
          message: "candidate not found !"
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
    Candidate.findById(id,async (err,candidate)=>{
      if(candidate){
        res.status(200).json({
          status: true,
          message: "success delete candidate !",
          data: await Candidate.findByIdAndRemove(id).populate('user','-password -hashedPassword -_id')
        })
      }else{
        res.status(404).json({
          status: false,
          message: "candidate not found !",
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