import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import searchMovieApi from "../services/searchMovieApi";
import { toast } from "react-toastify";
import styles from '../CardStyle/GalleryMovie.module.css';



export default function Movies() {
    const [searchMovie, setSearchMovie] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [searchNameSubmit, setSearchNameSubmit] = useState('');
    
    const handleClick = (event) => {
    const value = event.currentTarget.value.toLowerCase();
    setSearchName(() => value);
    };

    const handleSubmite = (e) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      toast("Input name for search movies");
      return;
        };
setSearchNameSubmit(searchName);
    // onSubmit(searchName);
    reset();
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
        <section className={styles.container}>
         <form className={styles.searchForm} onSubmit={handleSubmite}>
          <button type="submit" className={styles.form_button}>Search
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


            {searchMovie && <section >
                <ul className={styles.movie_list}>
                {searchMovie.map((movie) =>{
                    return (
                        <li key={movie.id} className={styles.movie_item}>
                            <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} width='200'/>
                            <Link className={styles.link} id={movie.id} to={`/movies${movie.id}`} >{movie.original_title} </Link>
                        </li>
                    )
                })}
                </ul>
            </section>}
        </section>

    );
};
