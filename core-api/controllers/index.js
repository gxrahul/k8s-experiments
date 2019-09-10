const express = require('express'),
	router = express.Router(),
	communityController = require('./community'),
	authController = require('./auth');

router.use('/login', authController);
router.use('/communities', communityController);

module.exports = router;