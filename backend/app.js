const express = require('express')
const bodyParser =  require('body-parser')
const mongoose = require('mongoose')
const posts = require('./routes/posts')
const cors = require('cors')

const app = express()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


app.use('/posts',posts)
const PORT = process.env.PORT || 5000;

const connection = 'mongodb+srv://sam_khan99:samad123@cluster0.0nbva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connection,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {app.listen(PORT,() => console.log(`Server running on ${PORT}`))})
    .catch((err) => {
        console.log(err.message)
})

mongoose.set('useFindAndModify',false)