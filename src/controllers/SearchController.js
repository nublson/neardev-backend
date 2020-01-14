const Dev = require('../models/Dev')

const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
	async index(req, res) {
		const { techs, latitude, longitude } = req.query
		const techsArray = parseStringAsArray(techs)

		const devs = await Dev.find({
			//Filter by techs
			techs: {
				$in: techsArray
			},
			// Search all devs within 10 kilometers (10000 meters)
			location: {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates: [longitude, latitude]
					},
					$maxDistance: 10000
				}
			}
		})

		return res.json(devs)
	}
}
