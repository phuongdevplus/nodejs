const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeText = new Schema({
  name: {type: String},
  description: {type: String},
  title: {type: String},
},{ timestamps: true});

module.exports = mongoose.model('home-text', HomeText);