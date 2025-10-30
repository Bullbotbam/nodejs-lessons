// Require the .env to store environment variables
require('dotenv').config()

// Creating access to express
const express = require('express')
// Create a variable to use with express 
const app = express()

// Create the mongoose variable to use with the db
const mongoose = require('mongoose')


// Connected .env file to store variables for database URL
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})

// Create a variable to hold the mongoose connection
const db = mongoose.connection
// Create error handling for database connection
db.on('error', (error)=>console.error(error))
// Console.log to identify the db connection is working
db.once('open',()=>console.log('Connected to Database'))

// Middleware that allows the app to use json as a body instead of a POST or GET 
app.use(express.json())

// Setup the route for our subscribers information then use express Middleware to connect the file to the file path
const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter)

// Console.log to show the server is connected on the specified port
app.listen(3000, ()=> console.log("Server Started on "))



