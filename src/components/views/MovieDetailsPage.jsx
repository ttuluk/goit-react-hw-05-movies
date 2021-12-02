import React, { useState, useEffect } from "react";
import { useParams, Routes, Route, Link } from 'react-router-dom';
import detailsMovieApi from "../services/detailsMovieApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MoviesDetailsPage () {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        detailsMovieApi
            .fetchMovieId(movieId)
            .then((movieElem) => setMovieDetails(movieElem) )
            .catch((error) => console.log(error));
    }, [movieId]);
console.log(movieDetails);
  return (
      <>
          {movieDetails && (<>
        <h2>{movieDetails.title}</h2>
         <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} width='200'/>
        
        <p className={styles.text_overviews}>{movieDetails.overview}</p>
        <p className={styles.text}>Rating : {movieDetails.vote_average}</p>
        <ul className={styles.list}>Genres: {movieDetails.genres.map((genre) => <li key={genre.id} className={styles.text}>{genre.name}</li>)}
        </ul>
        <ul className={styles.list}>Countries: {movieDetails.production_countries.map((genre) => <li key={genre.id} className={styles.text}>{genre.name}</li>)}
      </ul>
              <Link to={`cast`} >Cast</Link>
              <Link to={`reviews`} >Reviws</Link>
          </>
          )
          }

        <Routes>
        <Route path='cast' element={<Cast  />} /> 
        <Route path='reviews' element={ < Reviews />}/>
        </Routes>
      </>
  )
};

