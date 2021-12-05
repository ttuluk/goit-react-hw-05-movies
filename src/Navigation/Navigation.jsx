import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = () => {
    return (
    <nav>
            <NavLink to='/' className={({ isActive }) => isActive ? styles.active : styles.inactive}>HomePage </NavLink>
            <NavLink exact="true" to='/movies'  className={({ isActive }) => isActive ? styles.active : styles.inactive}> MoviesPage </NavLink>
            {/* <NavLink to='/movies/:movieId' className={({ isActive }) => isActive ? styles.active : styles.inactive}> MovieDetailsPage </NavLink> */}
            {/* <NavLink to='/movies/:movieId/cast' className={({ isActive }) => isActive ? styles.active : styles.inactive}> Cast </NavLink>
            <NavLink to='/movies/:movieId/reviews' className={({ isActive }) => isActive ? styles.active : styles.inactive}> Reviews </NavLink> */}
             
    </nav>)
};

export default Navigation;