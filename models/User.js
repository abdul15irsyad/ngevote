const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = new Schema({
  name: { type: String, required: true },
  age:{ type: Number },
  username: { type: String, required: true, unique: true, trim:true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength:8 },
  motto: { type: String },
  achievement: [{ type: String }],
  history: { type: String },
  isCandidate: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false }
},{
  versionKey: false,
  timestamps: true
})

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("User", userSchema)