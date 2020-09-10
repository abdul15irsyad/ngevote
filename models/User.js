const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = new Schema({
  name: {type: String,required: true},
  age:{type: Number,required: true},
  username: {type: String,required: true, index: true},
  password: {type: String,required: true},
  hashedPassword: {type: String,required: true},
},{
  versionKey: false
})

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("user",userSchema)