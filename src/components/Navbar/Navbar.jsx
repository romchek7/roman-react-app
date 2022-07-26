import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.item}><NavLink to='/home'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Home</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/profile'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Profile</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/users'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Users</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/dialogs'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Messages</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/news'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>News</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;