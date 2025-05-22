const Car = require('../models/Car');


// POST a new car
const createCar = async (req, res) => {
  try {
    const { brand, model, year, horsepower, price, image } = req.body;

    const newCar = new Car({
      brand,
      model,
      year,
      horsepower,
      price,
      image
    });

    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getCars, createCar };
