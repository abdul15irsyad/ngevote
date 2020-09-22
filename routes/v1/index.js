const express = require('express')
const router = express.Router()
const authRouter = require('./auth')
const userRouter = require('./user')
const candidateRouter = require('./candidate')
const { route } = require('./candidate')

router.get('/',(req,res)=>{
  res.send(`welcome to ngevote`)
})

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/candidate',candidateRouter)
router.use('*',(req,res)=>{
  res.status(404).json({
    status: false,
    message: 'API not found.'
  })
})

module.exports = router