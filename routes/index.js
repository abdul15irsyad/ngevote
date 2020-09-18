const express = require('express')
const router = express.Router()
const path = require('path')

const v1 = require('./v1')

router.use('/api/v1',v1)

router.use(express.static('./client/build'));
router.use('/*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
})

module.exports = router