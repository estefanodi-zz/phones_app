var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PhonesSchema = new mongoose.Schema({
  model: { 
     type: String, 
     required: true
  },
  description: { 
     type: String, 
     required: true
  },
  image: {
     type: String, 
     required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

var Phones = mongoose.model('Phones', PhonesSchema);
module.exports = Phones;