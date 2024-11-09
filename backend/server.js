const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Movie = require('./movie');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());



app.get('/api/getmovies', async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log('Movies fetched:', movies); // Add logging
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error); // Add logging
        res.status(500).send(error);
    }
});

app.post('/api/movies', async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        await newMovie.save();
        console.log('Movie added:', newMovie); // Add logging
        res.status(201).send(newMovie);
    } catch (error) {
        console.error('Error adding movie:', error); // Add logging
        res.status(400).send(error);
    }
});

// ...existing code...

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});