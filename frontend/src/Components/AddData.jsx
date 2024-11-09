import React, { useState } from 'react';
import axios from 'axios';

const AddData = () => {
    const [moviename, setMoviename] = useState('');
    const [actor, setActor] = useState('');
    const [actress, setActress] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = { moviename, actor, actress, rating: Number(rating) };

        try {
            await axios.post('http://localhost:3000/postmoviedata', newMovie);
            alert('Movie added successfully');
        } catch (error) {
            console.error('There was an error adding the movie!', error);
        }
    };

    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Movie Name:</label>
                    <input
                        type="text"
                        value={moviename}
                        onChange={(e) => setMoviename(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Actor:</label>
                    <input
                        type="text"
                        value={actor}
                        onChange={(e) => setActor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Actress:</label>
                    <input
                        type="text"
                        value={actress}
                        onChange={(e) => setActress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddData;