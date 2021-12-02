import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import castMovieApi from "../services/castMovieApi";
import styles from './Cast.module.css';

export default function Cast() {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null);
 
    useEffect(() => {
        castMovieApi
            .fetchCastMovie(movieId)
            .then((movieElem) => setMovieCast(movieElem.cast))
            .catch((error) => console.log(error));
    }, [movieId]);


        return (
            <>
                {movieCast && <ul>
                {movieCast.map((movie) =>{
                    return (
                        <li key={movie.id} >
                            <img src={movie.profile_path} alt={movie.name} />
                            {movie.name}
                        </li>
                    )
                })}
            </ul>}
            </>
        )

}