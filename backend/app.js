const express = require('express')
const bodyParser =  require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


app.use('/posts',postRoutes)
app.use('/user',userRoutes)
const PORT = process.env.PORT || 5000;

console.log(process.env.SECRET)
const connection = 'mongodb+srv://sam_khan99:samad123@cluster0.0nbva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connection,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {app.listen(PORT,() => console.log(`Server running on ${process.env.NODE_ENV}`))})
    .catch((err) => {
        console.log(err.message)
})

mongoose.set('useFindAndModify',false)