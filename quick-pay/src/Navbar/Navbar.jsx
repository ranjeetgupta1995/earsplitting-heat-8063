import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <div className={styles.navbar}>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <NavLink className={styles.link} to="/login">Log-in</NavLink>
            </div>
        </div>
    )
}

export default Navbar;