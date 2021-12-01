import React, { useState, useEffect } from "react";
import movieApi from "../services/popularMovieApi";
import { Link } from 'react-router-dom';


export default function HomePage() {
    const [movieTrend, setMovieTrendState] = useState(null);
    const [movieHomeId, setMovieHomeId] = useState('');
    
    useEffect(() => {
        movieApi
            .fetchMovie()
            .then((movieElem) => setMovieTrendState(movieElem.results) )
            .catch((error) => console.log(error));
    }, []);

const movieClick = (e) => {
    e.preventDefault();
        console.dir(e.currentTarget);
        setMovieHomeId(e.currentTarget.id);
    };

    return (
        <>
            <h1>Movies</h1>
            {movieTrend && <ul>
                {movieTrend.map((movie) => {
                    return (
                        <li key={movie.id} onClick={movieClick}>
                            {/* <img src={movie.poster_path} alt={movie.title} /> */}
                             <Link id={movie.id} to={`/movies${movie.id}`} >{movie.original_title} </Link>
                        </li>
                    )
                })}
            </ul>}
        </>
    );
};

// setMovieElemState(movieElem.hits)