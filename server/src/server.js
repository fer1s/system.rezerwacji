// Require the dotenv package
require('dotenv').config()

// Set up the express app
const express = require('express')
const app = express()

// Import other packages
const cors = require('cors')

// Variabls
const PORT = process.env.PORT || 3002
const MONGO_URI = process.env.MONGO_URI

// Connect to database
require('./mongo').connect(MONGO_URI)

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/api', require('./routes'))

// Listen to port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})