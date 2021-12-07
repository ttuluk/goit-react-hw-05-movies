import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import React from "react";

const HomePage = lazy(() =>
  import('./components/views/HomePage.jsx' /* webpackChunkName: "authors-subview"*/),
);

const Movies= lazy(() =>
  import('./components/views/MoviesPage.jsx' /* webpackChunkName: "authors-subview"*/),
);

const MoviesDetailsPage = lazy(() =>
  import('./components/views/MovieDetailPage.jsx'/* webpackChunkName: "authors-subview"*/),
);

const NotFoundView = lazy(() =>
  import('./components/views/NotFoundView.jsx'/* webpackChunkName: "authors-subview"*/),
);


function App() {
  return (
    <div>
      <header className='App-header'><Navigation /></header>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact="true" path="/movies" element={<Movies />} />
          <Route path="/movies:movieId" element={<MoviesDetailsPage />} >
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        
          <Route element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
