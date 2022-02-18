require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

// Connect DB
const connectDB = require('./db/connect')

// Routers

// Error Handler

app.use(express.json())

// Routes

// Middlewares

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening on Port : ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
