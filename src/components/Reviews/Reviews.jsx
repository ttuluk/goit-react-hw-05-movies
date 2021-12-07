import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import {apiReviews} from "../services/api";
import styles from './Reviews.module.css'

export default function Reviews() {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
 
    useEffect(() => {
        apiReviews
            .fetchReviewsMovie(movieId)
            .then((movieElem) => setMovieReviews(movieElem.results))
            .catch((error) => console.log(error));
    }, [movieId]);


    return (
        <section className={styles.container}>
            {movieReviews && <ul>
                {movieReviews.map((movie) => {
                    return (
                        <li key={movie.id} >
                            {movie.author}
                            <p>{movie.content}</p>
                        </li>
                    )
                })}
            </ul>}
        </section>
    );
};