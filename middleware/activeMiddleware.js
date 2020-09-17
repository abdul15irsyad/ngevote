const User = require('../models/User')

module.exports = {
  isActive: async(req,res,next)=>{
    try{
      let { id } = req.user
      User.findById(id,'-password').exec((err,user)=>{
        if(user.isActive) next()
        else{
          return res.status(400).json({
            status: false,
            message: 'user not active',
          })
        }
      })
    }catch(err){
      return res.status(500).json({
        message:'interal server error !',
        error:err.message
      })
    }
  }
}