const express = require('express'),
	service = require('../service/community'),
	router = express.Router();

router.get('/', (req, res) => {
	// return all communities
	let filters = req.params.filters || {};
	service
		.getCommunities(filters)
		.then((communities) => {
			res.send(communities);
		})
		.catch((error) => {
			req.status(400).json({error: error.toString()});
		});
});

router.post('/', (req, res) => {
	// create community
	let data = req.body || {};
	service
		.createCommunity(data)
		.then((community) => {
			res.send(community);
		})
		.catch((error) => {
			res.status(400).json({error: error.toString()});
		});
});

module.exports = router;