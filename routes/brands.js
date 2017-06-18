var express = require('express');
var router = express.Router();
var brandController = require('../controllers/brand')

router.get('/', brandController.index);
router.get('/:id', brandController.show);
router.get('/:id/cars', brandController.carsIndex)

module.exports = router;