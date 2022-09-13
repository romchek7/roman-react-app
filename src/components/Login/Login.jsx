import React, {useEffect} from 'react'
import styles from './Login.module.css'
import {email, maxLength, minLength} from "../../validation/validators";
import {connect} from "react-redux";
import {logInUser} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import {useFormik} from 'formik';
import {getAuthSelector, getCaptcha, getErrorOfAuthorization} from "../../selectors/authSelectors";

const minLength5 = minLength(5)
const maxLength50 = maxLength(50)

let LoginForm = ({logInUser, errorAuth, captcha}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
            captcha: ''
        },
        onSubmit: values => {
            logInUser(values.email, values.password, values.rememberMe, values.captcha)
        },
        validate: values => {
            let errors = {}

            if (!values.email) {
                errors.email = 'Email is required!'
            }

            if (email(values.email)) {
                errors.email = email(values.email)
            }

            if(minLength5(values.password)) {
                errors.password = minLength5(values.password)
            }

            if(maxLength50(values.password)) {
                errors.password = maxLength50(values.password)
            }

            return errors
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.formDiv}>
                <div className={styles.formItem}>
                    <input id='email' placeholder='Email'
                           name='email' type='text'
                           onChange={formik.handleChange}
                           value={formik.values.email}/>
                </div>
                <label htmlFor='email'>
                    <div className={formik.errors.email ? styles.active : styles.notActive}>
                        <p className={styles.errorText}>{formik.errors.email}</p>
                    </div>
                </label>
                <div className={styles.formItem}>
                    <input id='password' placeholder='Password' type='password' name='password'
                           value={formik.values.password} onChange={formik.handleChange}/>
                </div>
                <label htmlFor='password'>
                    <div className={formik.errors.password ? styles.active : styles.notActive}>
                        <p className={styles.errorText}>{formik.errors.password}</p>
                    </div>
                </label>
                <div className={styles.formItem}>
                    <input id='rememberMe' name='rememberMe' type='checkbox' onChange={formik.handleChange}/>
                    Remember me
                </div>
                <div className={errorAuth ? styles.loginErrorActive : styles.notActive}>
                    {errorAuth}
                </div>
                {captcha != null
                    ? <div className={styles.captchaDiv}>
                        <img src={captcha}/>
                        <input id='captcha' placeholder='captcha' type='text' name='captcha'
                               value={formik.values.captcha} onChange={formik.handleChange}/>
                    </div>
                    : null}
                <div className={styles.formItem}>
                    <button type='submit'>Login</button>
                </div>
            </div>
        </form>
    )
}

let Login = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (props.isAuth) {
            navigate('/profile')
        }
    }, [props.isAuth])

    return <div className={styles.main}>
        <h1>LOGIN</h1>
        <LoginForm logInUser={props.logInUser} captcha={props.captcha} errorAuth={props.errorAuth}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: getAuthSelector(state),
        captcha: getCaptcha(state),
        errorAuth: getErrorOfAuthorization(state)
    }
}

export default connect(mapStateToProps, {logInUser})(React.memo(Login))