import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => setMovies(response.data.data))
            
            .catch(err => setError(err));
            console.log(movies);
    }, []);

    if (error || movies.length === 0) return <p>Error loading movies</p>;
    
    return (
        <div>
            <h1>Movies list</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <h2>{movie.title}</h2>
                            <img src = {movie.image} alt={movie.director} />
                            <p>{movie.abstract}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}