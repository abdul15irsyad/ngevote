const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  motto: { type: String, required:true },
  achievment: [{ type: String }],
  history: { type: String }
},{
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model("Candidate", candidateSchema)