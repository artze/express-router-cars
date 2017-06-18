var homeRoute = require('./home');
var brandsRoute = require('./brands');
var carsRoute = require('./cars')

function init(app) {
	app.use('/', homeRoute);
	app.use('/brands', brandsRoute);
	app.use('/cars', carsRoute)
}

module.exports = {
	init: init
}