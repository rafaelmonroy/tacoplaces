const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const TacoPlaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TacoPlace = mongoose.model('tacoPlace', TacoPlaceSchema);
