const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const user = require('./routes/user')

const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
},(err)=>{
  console.log(err ? err : 'database connected!')
})

app.get('/',(req,res)=>{
  res.send('welcome')
})

app.use('/user',user)

app.listen(port,()=>console.log(`server running on port http://localhost:${port}`))