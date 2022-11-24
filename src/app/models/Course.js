const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String},
  title: {type: String},
  img: {type: Object},
  description: {type: String},
  slug: {type:String},
  content:{type:String},
  video:{type: String},
  icon:{type: String}
},{ timestamps: true});

module.exports = mongoose.model('Course', Course);