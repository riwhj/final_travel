const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  place: { type: String, required: true },
  detail: { type: String, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;