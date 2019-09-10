const Community = require('../models/community'),
	Promise = require('bluebird');
let service = {};

service.getCommunities = (filters) => {
	return new Promise((resolve, reject) => {
		Community.find(filters).find((error, communities) => {
			if(error) {
				reject(error);
			} else {
				resolve(communities);
			}
		});
	});
};

service.createCommunity = (data) => {
	return new Promise((resolve, reject) => {
		let community = new Community(data);
		community.save((error, community) => {
			if(error) {
				reject(error);
			} else {
				resolve(community);
			}
		});
	});
};
module.exports = service;
