import React from "react";
import x from './Logo.module.css'

const Logo = () => {
    return (
        <div className={x.main}>
            <div className={x.image}>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/soccer-ball_26bd.png" />
            </div>
            <div className={x.status}>
                <p>
                    Computer vision
                </p>
            </div>
        </div>
    );
}

export default Logo;