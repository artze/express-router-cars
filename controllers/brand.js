var data = require('../data.json');

function index(req, res) {
	res.json(data.brands)
}

function show(req, res) {
	var brandId = req.params.id
	var selectedBrand = data.brands.find(function(brand) {
		return brand.id == brandId
	})
	res.json(selectedBrand)
}

function carsIndex(req, res) {
	var brandId = req.params.id;
	var selectedCars = data.cars.filter(function(car) {
		return car.brandId == brandId
	})
	res.json(selectedCars)
}

module.exports = {
	index: index,
	show: show,
	carsIndex: carsIndex
}