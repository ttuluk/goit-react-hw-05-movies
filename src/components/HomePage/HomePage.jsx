import React, { useState, useEffect } from "react";
import movieApi from "../services/api";


export default function HomePage() {
    const [movieTrend, setMovieTrendState] = useState(null);
 
    useEffect(() => {
        movieApi
            .fetchMovie()
            .then((movieElem) => setMovieTrendState(movieElem.results) )
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>Movies</h1>
            {movieTrend && <ul>
                {movieTrend.map((movie) => {
                    return (
                        <li key={movie.id}>
                            {/* <img src={movie.poster_path} alt={movie.title} /> */}
                            {movie.original_title}
                        </li>
                    )
                })}
            </ul>}
        </>
    );
};

// setMovieElemState(movieElem.hits)