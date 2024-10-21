const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const userRoute = require('./routes/userRoute')

const app = express()
require("dotenv").config() // to allow us to read from the env file

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

/* 
CRUD

Create => app.post
Read => app.get
Update => app.put
Delete => app.delete
*/

app.get('/', (req, res)=>{
    res.send("Welcome to our APIs")
})

app.use("/api/users", userRoute) // => /api/users/register

app.listen(port, (req, res) => {
    console.log(`The app is running on port : ${port}`);
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err.message)) 