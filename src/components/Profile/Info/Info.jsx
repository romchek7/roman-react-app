import React from "react";
import x from './Info.module.css'

const Info = () => {
    return (
        <div className={x.main}>
            <div className={x.personalInfo}>
                <p>Name Surname</p>
            </div>
            <div className={x.slide}>
                <div className={x.mainSlide}>
                    <img src="https://cdn-prod.scalefast.com/public/assets/img/resized/focus-store/107224f4491b98af432e3b2680128f30_1920_KR.jpg"/>
                </div>
                <div className={x.slideImages}>
                    <img src="https://cdn-prod.scalefast.com/public/assets/img/resized/focus-store/107224f4491b98af432e3b2680128f30_1920_KR.jpg" />
                    <img src="https://cdn-prod.scalefast.com/public/assets/img/resized/focus-store/107224f4491b98af432e3b2680128f30_1920_KR.jpg" />
                    <img src="https://cdn-prod.scalefast.com/public/assets/img/resized/focus-store/107224f4491b98af432e3b2680128f30_1920_KR.jpg" />
                    <img src="https://cdn-prod.scalefast.com/public/assets/img/resized/focus-store/107224f4491b98af432e3b2680128f30_1920_KR.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Info;