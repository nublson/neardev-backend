const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const routes = require('./routes')
const dbUrl = process.env.MONGO_URL
const port = process.env.PORT || 3333

const app = express()
mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Port ${port} is running...`))
