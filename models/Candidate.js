const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  motto: {type: String, required:true}
},{
  versionKey: false
})

module.exports = mongoose.model("Candidate",candidateSchema)