const mongoose = require('mongoose');

const pumpkinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  color: { type: String, required: true },
});

const Pumpkin = mongoose.model('Pumpkin', pumpkinSchema);
module.exports = Pumpkin;
