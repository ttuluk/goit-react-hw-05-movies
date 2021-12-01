import React, { useState, useEffect } from "react";
import { useParams, Routes, Route, Link } from 'react-router-dom';
import detailsMovieApi from "../services/detailsMovieApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

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
          {movieDetails && (<>
          <h2>Details{movieId}</h2>
          <p>Title : {movieDetails.title}</p>
              <p>Popular : {movieDetails.popularity}</p>
              <Link to={`cast`} >Cast</Link>
              <Link to={`reviews`} >Reviws</Link>
          </>
          )
          }

        <Routes>
        <Route path='cast' element={<Cast />} />
        <Route path='reviews' element={<Reviews />} />
        </Routes>
      </>
  )
};

