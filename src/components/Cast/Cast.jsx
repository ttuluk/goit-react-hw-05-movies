import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import {apiCasts} from "../services/api";
import styles from './Cast.module.css';

export default function Cast() {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null);
 
    useEffect(() => {
        apiCasts
            .fetchCastMovie(movieId)
            .then((movieElem) => setMovieCast(movieElem.cast))
            .catch((error) => console.log(error));
    }, [movieId]);


    return (
        <section className={styles.container}>
            {movieCast && <ul className={styles.list}>
                {movieCast.map((movie) => {
                    return (
                        <li key={movie.id} className={styles.item}>
                            <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`} alt={movie.name} width='50' />
                            <p className={styles.text}>{movie.name}</p>
                        </li>
                    )
                })}
            </ul>}
        </section>
    );
};
