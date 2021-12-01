import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import searchMovieApi from "../services/searchMovieApi";
import { toast } from "react-toastify";
import styles from '../MoviesPage/MoviePage.module.css'
import detailsMovieApi from "../services/detailsMovieApi";


export default function Movies() {
    // const match = useRouteMatch();

    const [searchMovie, setSearchMovie] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [searchNameSubmit, setSearchNameSubmit] = useState('');
    const [movieId, setMovieId] = useState('');
    

    const handleClick = (event) => {
    const value = event.currentTarget.value.toLowerCase();
    setSearchName(() => value);
    };

    const handleSubmite = (e) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      toast("Input name for search movies");
      return;
        }
setSearchNameSubmit(searchName);
    // onSubmit(searchName);
    reset();
    };

    const movieClick = (e) => {
    e.preventDefault();
        console.dir(e.currentTarget);
        setMovieId(e.currentTarget.id);
        
    };

    const reset = () => {
    setSearchName(()=> '');
    };
    
    useEffect(() => {
        searchMovieApi
            .fetchSearchMovie(searchNameSubmit)
            .then((movieElem) => setSearchMovie(movieElem.results) )
            .catch((error) => console.log(error));
    }, [searchNameSubmit]);

    
    return (
        <>
         <form className={styles.searchForm} onSubmit={handleSubmite}>
          <button type="submit" className={styles.form_button}>Search
            {/* <span className={styles.button_label}>Search</span> */}
          </button>

          <input
            className={styles.button_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchName}
            onChange={handleClick}
          />
            </form>


            {searchMovie && <ul>
                {searchMovie.map((movie) =>{
                    return (
                        <li key={movie.id} onClick={movieClick}>
                            <Link id={movie.id} to={`/movies${movie.id}`} >{movie.original_title} </Link>
                        </li>
                    )
                })}
            </ul>}
        </>

    );
};
