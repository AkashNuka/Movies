import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getmoviedata') // Updated port to 5000
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <h2>{movie.moviename}</h2>
                        <p>Actor: {movie.actor}</p>
                        <p>Actress: {movie.actress}</p>
                        <p>Rating: {movie.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;