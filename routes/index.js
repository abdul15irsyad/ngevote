const express = require('express')
const router = express.Router()
const path = require('path')

const v1 = require('./v1')

router.use('/api/v1',v1)
router.use('/api/*',(req,res)=>{
  res.status(404).json({
    status: false,
    message: 'API not found.'
  })
})

router.use('/*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
})

module.exports = router