require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

// Connect DB
const connectDB = require('./db/connect')

// Routers
const authRouter = require('./routes/auth')

// Error Handler
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// Routes
app.use('/api/v1/auth', authRouter)

// Middlewares
app.use(errorHandlerMiddleware)

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
