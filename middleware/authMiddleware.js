const jwt = require('jsonwebtoken')

module.exports = {
  checkAuthToken: (req,res,next)=>{
    try{
      let authToken = req.header('x-auth-token')
      if(!authToken){
        return res.status(401).json({
          status: false,
          message: 'Authorization denied'
        })
      }
      jwt.verify(authToken, process.env.SECRET_KEY,(err,user)=>{
        if(user && user.type == 'auth'){
          req.user = user
          next()
        }else{
          return res.status(400).json({
            status: false,
            message: 'Authorization denied',
          })
        }
      })
    }catch(err){
      return res.status(500).json({
        message:'interal server error !',
        error:err.message
      })
    }
  },
  checkResetToken: (req,res,next)=>{
    try{
      let authToken = req.header('x-auth-token')
      if(!authToken){
        return res.status(401).json({
          status: false,
          message: 'Authorization denied'
        })
      }
      jwt.verify(authToken, process.env.SECRET_KEY,(err,user)=>{
        if(user && user.type=='reset-password'){
          req.user = user
          next()
        }else{
          return res.status(400).json({
            status: false,
            message: 'Authorization denied',
          })
        }
      })
    }catch(err){
      return res.status(500).json({
        message:'interal server error !',
        error:err.message
      })
    }
  },
}