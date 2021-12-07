import React, { useState, useEffect, lazy, Suspense } from "react";
import MoviesDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import { apiSearchId } from "../services/api";
import { useParams, Routes, Route } from 'react-router-dom';


const Cast = lazy(() =>
  import('../Cast/Cast.jsx' /* webpackChunkName: "authors-subview"*/),
);

const Reviews= lazy(() =>
  import('../Reviews/Reviews.jsx' /* webpackChunkName: "authors-subview"*/),
);

export default function MoviesDetailPage () {
    const {movieId} = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        apiSearchId
            .fetchMovieId(movieId)
            .then((movieElem) => setMovieDetail(movieElem) )
            .catch((error) => console.log(error));
    }, [movieId]);

  return (
    <>
      {movieDetail && <MoviesDetailsPage movieDetails={movieDetail} />
      }
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={< Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

