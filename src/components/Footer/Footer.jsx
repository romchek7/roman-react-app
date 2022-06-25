import React from "react";
import x from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={x.footer}>
            <div className={x.main}>
                <div className={x.item1}>Footer 1</div>
                <div className={x.item2}>Footer 2</div>
                <div className={x.item3}>Footer 3</div>
                <div className={x.item4}>Footer 4</div>
            </div>
        </footer>
    );
}

export default Footer;