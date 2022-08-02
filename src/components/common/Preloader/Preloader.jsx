import React from "react";
import preloaderGif from '../../assets/images/Preloader.gif';
import styles from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={styles.main}>
            <img src={preloaderGif}/>
        </div>
    )
}

export default Preloader