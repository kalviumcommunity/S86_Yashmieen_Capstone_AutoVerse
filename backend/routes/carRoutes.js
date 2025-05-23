const express = require('express');
const router = express.Router();
const { getCars, getCarById, createCar, updateCar } = require('../controllers/carController');

// Routes
router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', createCar);
router.put('/:id', updateCar); 

module.exports = router;
