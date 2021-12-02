import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from './components/views/HomePage';
import Movies from './components/views/MoviesPage';
import NotFoundView from './components/views/NotFoundView';
import React from "react";
import MoviesDetailsPage from './components/views/MovieDetailsPage';

function App() {

  return (
    <div>
      <header><Navigation /></header>
       <Routes>
        <Route path="/homepage" element={<HomePage />} />
        
        <Route exact="true" path="/movies" element={<Movies />} />
        <Route path="/movies:movieId" element={<MoviesDetailsPage />} >
        <Route path="cast" />
        <Route path="reviews" />
        </Route>
 
        
        <Route element={<NotFoundView />}/>
        </Routes>
    </div>

  );
};


export default App;
