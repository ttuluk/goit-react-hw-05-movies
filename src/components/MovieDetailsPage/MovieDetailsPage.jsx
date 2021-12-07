import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';
import { Link } from 'react-router-dom';

export default function MoviesDetailsPage({ movieDetails }) {
    return ((<section className={styles.container}>
        <h2>{movieDetails.title}</h2>
        <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} width='200' />
        
        <p className={styles.text_overviews}>{movieDetails.overview}</p>
        <p className={styles.text}>Rating : {movieDetails.vote_average}</p>
        
        <ul className={styles.list}>Genres: {movieDetails.genres.map((genre) =>
            <li key={genre.id} className={styles.text}>{genre.name}</li>)}
        </ul>

        <ul className={styles.list}>Countries: {movieDetails.production_countries.map((country) =>
            <li key={country.id} className={styles.text}>{country.name}</li>)}
        </ul>

        <div className={styles.link_box}>
            <Link className={styles.link} to={`cast`} >Cast</Link>
            <Link className={styles.link} to={`reviews`} >Reviws</Link>
        </div>

    </section>
    ));
};