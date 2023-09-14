const express = require('express')
const dotenv = require('dotenv')
const chats = require('./data/data')
const connectDB = require('./config/db')

const app = express()
dotenv.config()

connectDB()

const PORT = process.env.PORT || 5000

app.get('/api/chats', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(data=> data._id === req.params.id)
    res.send(singleChat)
})

app.listen(PORT, console.log('Server is running on PORT ' + PORT))