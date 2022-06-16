const express = require('express')
require('dotenv').config()//init dotenv

const mongoConfig = require('./config/mongoConfig')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const blogRouter = require('./routes/blogRouter')

const morgan = require('morgan')
const helmet = require('helmet')
const bcrypt = require('bcrypt')
const nodemon = require('nodemon')
const dotenv = require('dotenv')
//const jsonwebtoken = require('jsonwebtoken')

const app = express()
const PORT = 4000


//Middleware====================================================
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//Routers

app.use('/users', userRouter)

app.use('/blogs', blogRouter)

app.use('/auth', authRouter)


app.get('/', (req, res) => {
    res.status(200).json('WELCOME TO MY BLOG API!!')
})



app.listen(PORT, () => {  
    console.log(`The server is up and running on port: ${PORT}`)
    mongoConfig()
})