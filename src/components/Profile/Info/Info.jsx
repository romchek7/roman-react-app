import React from "react";
import styles from './Info.module.css'

const Info = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.personalInfo}><p>{props.profile.fullName}</p></div>
        </div>
    )
}

export default Info;