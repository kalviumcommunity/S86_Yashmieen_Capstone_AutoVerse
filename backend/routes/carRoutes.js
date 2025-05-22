const express = require('express');
const router = express.Router();
const { getCars, createCar } = require('../controllers/carController');


// POST a new car 
router.post('/', createCar);

module.exports = router;
