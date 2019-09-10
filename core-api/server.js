const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	NodeAbac = require('node-abac'),
	controllers = require('./controllers'),
	app = express();

// connect to db
if(process.env.DB_URL) {
	mongoose.connect(process.env.DB_URL, (err) => {
		if(err) {
			console.error(err);
		} else {
			console.log('db connection success');
		}
	});
	mongoose.connection.on('connected', () => {
		console.log('db connected = ', process.env.DB_URL);
	});
	mongoose.connection.on('error', (err) => {
		console.log('db error = ', err);
	});
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(bodyParser.text());


const myPolicy = {
	attributes: {
		user: {
			hasDrivingLicense: 'Possesses driving license'
		}
	},
	rules: {
		'can-drive': {
			attributes: {
				'user.hasDrivingLicense': {
					comparison_type: 'boolean',
					comparison: 'booleanAnd',
					value: true
				}
			}
		}
	}
};

const Abac = new NodeAbac(myPolicy);


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/core/', (req, res) => res.send('Hello World Core!'));

app.use(controllers);

// dont show the logs in the test environment
if(process.env.NODE_ENV !== 'test') {
	// use morgan to show logs
	app.use(morgan('combined'));
}

var port = process.env.PORT || 80;
app.listen(port, function() {
	console.log(`API running on localhost:${port}`);
});