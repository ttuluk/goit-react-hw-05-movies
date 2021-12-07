import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/' className={({ isActive }) => isActive ? styles.active : styles.inactive}>Home </NavLink>
            <NavLink exact="true" to='/movies' className={({ isActive }) => isActive ? styles.active : styles.inactive}> Movie</NavLink>
        </nav>);
};

export default Navigation;
