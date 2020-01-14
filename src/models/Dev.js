const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
	name: String,
	github_username: String,
	bio: String,
	avatar_url: String,
	techs: [String]
})

module.exports = model('Dev', DevSchema)
