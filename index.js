const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routes')
dotenv.config()

const port = process.env.PORT || 8000
const hostname = process.env.HOST || 'localhost'

app.use(cors())
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

app.use(express.static('./client/build'));

// routes
app.use(router)

app.listen(port,()=>console.log(`server running on port http://${hostname}:${port}`))