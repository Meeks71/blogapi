const express = require('express')
require('dotenv').config()//init dotenv

const mongoConfig = require('./config/mongoConfig.js')
const usersRouter = require('./routes/userRouter')
const morgan = require('morgan')
const helmet = require('helmet')
const authRouter = require('./routes/authRouter')
const blogRouter = require('./routes/blogRouter')
const bcrypt = require('bcrypt')
const nodemon = require('nodemon')

const dotenv = require('dotenv')
const jsonwebtoken = require('jsonwebtoken')

const app = express()
const PORT = 4000


//Middleware====================================================
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//Routers

app.use('/blogs', blogRouter)
app.use('/users', authRouter)





app.listen(PORT, () => {  
    console.log(`The server is up and running on port: ${PORT}`)
    mongoConfig()
})