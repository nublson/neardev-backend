const routes = require('express').Router()

const DevController = require('./controllers/DevController')

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

module.exports = routes
