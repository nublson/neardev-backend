const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const routes = require('./routes')
const dbUrl = process.env.MONGO_URL
const port = process.env.PORT || 3333

const app = express()
app.use(cors())

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Port ${port} is running...`))
