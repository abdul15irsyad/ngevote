const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Candidate = require('../../models/Candidate')
const User = require('../../models/User')
const internalServerError = require('./internalServerError')

router.get('/all',async(req,res)=>{
  try{
    let candidates = await Candidate.find().populate('user','-password -_id')
    res.status(200).json({
      status: true,
      data: candidates
    })
  }catch(err){
    internalServerError(err,res)
  }
})

router.get('/:id',async(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findById(id)
      .populate('user','-password -_id')
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
    internalServerError(err,res)
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
        message: 'already a candidate'
      })
    }
    Candidate.create({
      user: id,
    },(err,newCandidate)=>{
      if(newCandidate){
        let { motto, achievement, history } = req.body
        User.findByIdAndUpdate(newCandidate.user,{
          isCandidate: true,
          motto,
          achievement,
          history
        }).exec(async()=>{
          res.status(201).json({
            status: true,
            data: await Candidate.findById(newCandidate._id).populate('user','-password -_id')
          })
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

router.patch('/:id',(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findById(id).exec((err,candidate)=>{
      if(candidate){
        User.findByIdAndUpdate(id,{
          $set: req.body
        },async(err,user)=>{
          res.status(200).json({
            status: true,
            data: await Candidate.findById(id).populate('user','-password -_id')
          })
        })
      }else{
        res.status(404).json({
          status: false,
          message: "candidate not found !"
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

router.delete('/:id',(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findById(id,(err,candidate)=>{
      if(candidate){
        User.findByIdAndUpdate(id,{
          isCandidate: false,
        }).exec(async(err,user)=>{
          res.status(200).json({
            status: true,
            message: "Candidate deleted.",
            data: await Candidate.findByIdAndRemove(id,'-user')
          })
        })
      }else{
        res.status(404).json({
          status: false,
          message: "candidate not found !",
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

module.exports = router