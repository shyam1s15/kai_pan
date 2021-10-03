const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const cors = require('cors')
const TournamentRouter = require("./routers/tournament-router")
const apiPort = 3000

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', TournamentRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))



