import React from "react";
import x from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={x.navbar}>
            <div className={x.main}>
                <a href="#item1" className={x.item1}>
                    Home
                </a>
                <a href="#item2" className={x.item2}>
                    Profile
                </a>
                <a href="#item3" className={x.item3}>
                    News
                </a>
                <a href="#item4" className={x.item4}>
                    About us
                </a>
            </div>
        </nav>
    );
}

export default Navbar;