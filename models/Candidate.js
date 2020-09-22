const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model("Candidate", candidateSchema)