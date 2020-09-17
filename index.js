const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 8000
const hostname = process.env.HOST || 'localhost'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// connect to mongo db
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
},(err)=>{
  console.log(err ? err : 'database connected!')
})

// routes
app.get('/',(req,res)=>{
  res.send(`welcome to ngevote<br>(http://${hostname}:${port})`)
})

app.use('/auth',require('./routes/auth'))
app.use('/user',require('./routes/user'))
app.use('/candidate',require('./routes/candidate'))

app.listen(port,()=>console.log(`server running on port http://${hostname}:${port}`))