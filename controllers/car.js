var data = require('../data.json');

function index(req, res) {
	res.json(data.cars);
}

function show(req, res) {
	var carId = req.params.id;
	var selectedCar = data.cars.find(function(car) {
		return car.id == carId;
	});
	res.json(selectedCar);
}

module.exports = {
	index: index,
	show: show
}