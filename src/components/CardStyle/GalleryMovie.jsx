import styles from './GalleryMovie.module.css';
import { Link } from 'react-router-dom';

export default function GalleryMovie({ moviesTrend }) {
    return (<section className={styles.container}>
        <ul className={styles.movie_list}>
            {moviesTrend.map((movie) => {
                return (
                    <li key={movie.id} className={styles.movie_item}>
                        <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width='200' />
                        <Link className={styles.link} id={movie.id} to={`/movies${movie.id}`} >{movie.title} </Link>
                    </li>
                )
            })}
        </ul>
    </section>);
};


