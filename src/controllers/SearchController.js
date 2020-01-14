const Dev = require('../models/Dev')

const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
	async index(req, res) {
		const { techs, latitude, longitude } = req.query
		return res.json({
			techs,
			latitude,
			longitude
		})
	}
}
