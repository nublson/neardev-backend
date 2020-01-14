const routes = require('express').Router()

routes.get('/', (req, res) => res.json({ project: 'Neardev' }))

module.exports = routes
