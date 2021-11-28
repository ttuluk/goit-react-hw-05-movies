import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import HomePage from '../components/HomePage/HomePage';

const Navigation = () => {
    return (
    <nav>
            <NavLink to='/homepage' className={styles.link} activeClassName={styles.active_link}>HomePage </NavLink>
            <NavLink exact to='/movies'  className={styles.link} activeClassName={styles.active_link}> MoviesPage </NavLink>
            <NavLink exact to='/movies/:movieId' className={styles.link} activeClassName={styles.active_link}> MovieDetailsPage </NavLink>
            <NavLink to='/movies/:movieId/cast' className={styles.link} activeClassName={styles.active_link}> Cast </NavLink>
            <NavLink to='/movies/:movieId/reviews' className={styles.link} activeClassName={styles.active_link}> Reviews </NavLink>
            
    </nav>)
};

export default Navigation;