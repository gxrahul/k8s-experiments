const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommunitySchema = new Schema({
	title: String,
	description: String,
	created: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: null
	}
}, {collection: 'Community'});

module.exports = mongoose.model('Community', CommunitySchema);