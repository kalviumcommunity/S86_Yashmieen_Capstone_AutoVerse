const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  horsepower: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },

  
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true
  }
});

module.exports = mongoose.model('Car', carSchema);
