const express = require('express')
const router = express.Router()
const authRouter = require('./auth')
const userRouter = require('./user')
const candidateRouter = require('./candidate')

router.get('/',(req,res)=>{
  res.send(`welcome to ngevote`)
})

router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/candidate',candidateRouter)

module.exports = router