import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {getAuthSelector} from "../../selectors/authSelectors";
import {connect} from "react-redux";

const Navbar = (props) => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.item}><NavLink to='/home'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Home</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/profile'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Profile</NavLink>
            </div>
            {props.isAuth
                ? undefined
                : <div className={styles.item}><NavLink to='/login'
                                                        className={({isActive}) => isActive ? styles.active : styles.link}>Login</NavLink>
                </div>}
            <div className={styles.item}><NavLink to='/users'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Users</NavLink>
            </div>
            <div className={styles.item}><NavLink to='/dialogs'
                                                  className={({isActive}) => isActive ? styles.active : styles.link}>Messages</NavLink>
            </div>
        </nav>
    );
}

let mapStateToProps = (state) => ({
        isAuth: getAuthSelector(state)
    }
)

export default connect(mapStateToProps, null)(Navbar)