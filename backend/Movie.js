const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    moviename: String,
    actor: String,
    actress: String,
    rating: Number
});

const Movie = mongoose.model('Movie', userSchema);
module.exports = Movie;