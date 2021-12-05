import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Routes, Route, Link } from 'react-router-dom';
import detailsMovieApi from "../services/detailsMovieApi";
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../Cast/Cast.jsx' /* webpackChunkName: "authors-subview"*/),
);
const Reviews= lazy(() =>
  import('../Reviews/Reviews.jsx' /* webpackChunkName: "authors-subview"*/),
);

export default function MoviesDetailsPage () {
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        detailsMovieApi
            .fetchMovieId(movieId)
            .then((movieElem) => setMovieDetails(movieElem) )
            .catch((error) => console.log(error));
    }, [movieId]);

  return (
      <>
          {movieDetails && ( <section className={styles.container}>
        <h2>{movieDetails.title}</h2>
         <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} width='200'/>
        
        <p className={styles.text_overviews}>{movieDetails.overview}</p>
        <p className={styles.text}>Rating : {movieDetails.vote_average}</p>
        <ul className={styles.list}>Genres: {movieDetails.genres.map((genre) => <li key={genre.id} className={styles.text}>{genre.name}</li>)}
        </ul>
        <ul className={styles.list}>Countries: {movieDetails.production_countries.map((country) =>
          <li key={country.id} className={styles.text}>{country.name}</li>)}
        </ul>
        <div className={styles.link_box}>
          <Link className={styles.link} to={`cast`} >Cast</Link>
          <Link className={styles.link} to={`reviews`} >Reviws</Link>
        </div>
          </section>
          )
          }
    <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
        <Route path='cast' element={<Cast  />} />
        <Route path='reviews' element={ < Reviews />}/>
        </Routes>
        </Suspense>
      </>
  )
};

