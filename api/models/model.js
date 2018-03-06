const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: String,
    rated: String,
    released: String,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    ratings: Array,
    metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    type: String,
    dvd: String,
    boxOffice: String,
    production: String,
    website: String,
    response: String
});

module.exports = mongoose.model('Movies', MovieSchema);