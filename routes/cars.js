var express = require('express');
var router = express.Router();
var carController = require('../controllers/car');

router.get('/', carController.index);
router.get('/:id', carController.show);

module.exports = router;