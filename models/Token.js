const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
  type: { type: String, required: true },
  token: { type: String, required: true },
  expiredAt: { type: Date , required: true}
},{
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model("Token", tokenSchema)