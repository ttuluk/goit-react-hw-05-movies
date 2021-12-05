import React, { useState, useEffect } from "react";
import movieApi from "../services/popularMovieApi";
import { Link } from 'react-router-dom';
import styles from '../CardStyle/GalleryMovie.module.css';



export default function HomePage() {
    const [movieTrend, setMovieTrendState] = useState(null);
    
    useEffect(() => {
        movieApi
            .fetchMovie()
            .then((movieElem) => setMovieTrendState(movieElem.results) )
            .catch((error) => console.log(error));
    }, []);



    return (
        <section className={styles.container}>
            {movieTrend && <ul className={styles.movie_list}>
                {movieTrend.map((movie) => {
                    return (
                        <li key={movie.id} className={styles.movie_item}>
                            <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width='200'/>
                        <Link className={styles.link} id={movie.id} to={`/movies${movie.id}`} >{movie.title} </Link>
                        </li>
                    )
                })}
            </ul>}
        </section>
    );
};
