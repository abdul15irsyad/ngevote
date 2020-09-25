const express = require('express')
const router = express.Router()
const Candidate = require('../../models/Candidate')
const User = require('../../models/User')
const { internalServerError } = require('./response')

// get all candidates
router.get('/all',async(req,res)=>{
  try{
    let candidates = await Candidate.find().populate('user','-password')
    res.status(200).json({
      status: true,
      message: 'Get all candidates.',
      data: candidates
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// get a candidate by id (params)
router.get('/:id',async(req,res)=>{
  try{
    let id = req.params.id
    Candidate.findById(id)
      .populate('user','-password')
      .exec((err,candidate)=>{
        if(candidate){
          res.status(200).json({
            status: true,
            data: candidate
          })
        }else{
          res.status(404).json({
            status: false,
            message: "Candidate not found.",
          })
        }
      })    
  }catch(err){
    internalServerError(err,res)
  }
})

// set user to be a candidate
router.post('/:id',async(req,res)=>{
  try{
    let id = req.params.id
    User.findById(id).exec((err,user)=>{
      if(!user){
        return res.status(404).json({
          status: false,
          message: 'User not found.'
        })
      }
    })
    let candidate = await Candidate.findOne({user:id}).populate('user','-password -hashedPassword -_id')
    if(candidate){
      return res.status(400).json({
        status: false,
        message: 'Already a candidate.'
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
          message: 'Failed set a candidate.',
          error: err.message
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// edit candidate by id
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
            message: 'Candidate updated.',
          })
        })
      }else{
        res.status(404).json({
          status: false,
          message: "Candidate not found."
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

// delete a candidate
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
          message: "Candidate not found.",
        })
      }
    })
  }catch(err){
    internalServerError(err,res)
  }
})

module.exports = router