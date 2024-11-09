const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Movie = require('./movie');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/postmoviedata", async (req, res) => {
    const { moviename, actor, actress, rating } = req.body;

    try {
        const newMovie = new Movie({ moviename, actor, actress, rating });
        await newMovie.save();
        res.status(201).json(newMovie); // Use res.json() for pretty JSON response
    } catch (error) {
        res.status(400).json(error); // Use res.json() for pretty JSON response
    }
});

app.get("/getmoviedata", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies); // Use res.json() for pretty JSON response
    } catch (error) {
        res.status(400).json(error); // Use res.json() for pretty JSON response
    }
});
mongoose
    .connect('mongodb+srv://akashnuka04:Edunet@edunet.rn5le.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
