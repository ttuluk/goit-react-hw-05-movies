import React, { useState, useEffect } from 'react';
import { apiMovie } from '../../services/api';
import GalleryMovie from '../CardStyle/GalleryMovie';

export default function HomePage() {
  const [movieTrend, setMovieTrendState] = useState(null);

  useEffect(() => {
    apiMovie
      .fetchMovie()
      .then(movieElem => setMovieTrendState(movieElem.results))
      .catch(error => console.log(error));
  }, []);

  return <>{movieTrend && <GalleryMovie moviesTrend={movieTrend} />}</>;
}
