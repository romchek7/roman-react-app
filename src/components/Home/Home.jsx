import React from "react";
import styles from './Home.module.css';

let Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <div>Profile</div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.friends}>Friends</div>
                    <div className={styles.messages}>Messages</div>
                </div>
            </div>
        </div>
    );
}

export default Home;