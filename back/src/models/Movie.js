const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String, required: true },
    director: { type: String, required: true },
    year: Number,
    duration: String,
    genre: String,
    rate: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

