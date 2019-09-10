const sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect,
	sinonTest = require('sinon-test')(sinon),
	Community = require('../models/community');
require('sinon-mongoose');

describe('Communities', () => {
	let testCommunity = {
		title: '',
		description: '',
		created: Date.now()
	};

	it('should create the test community', sinonTest(function(done) {
		let CommunityMock = this.mock(Community);
		let expectedResult = {status: true, communities: []};
		CommunityMock.expects('find').yields(null, expectedResult);
		Community.find((error, result) => {
			CommunityMock.verify();
			CommunityMock.restore();
			expect(result.status).to.be.true;
			expect(result.communities).to.be.an('array');
			expect(result.communities.length).to.equal(0);
			done();
		});
	}));

	it('should return the created community', sinonTest(function(done) {
		let CommunityMock = this.mock(Community);
		let expectedResult = {status: true, communities: []};
		CommunityMock.expects('find').yields(null, expectedResult);
		Community.find((error, result) => {
			CommunityMock.verify();
			CommunityMock.restore();
			expect(result.status).to.be.true;
			expect(result.communities).to.be.an('array');
			expect(result.communities.length).to.equal(0);
			done();
		});
	}));
});
