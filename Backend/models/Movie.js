const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 2
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    default: 'https://img.freepik.com/free-psd/music-shop-poster-template_23-2148855476.jpg'
  }
});

module.exports = mongoose.model('Movie', movieSchema);