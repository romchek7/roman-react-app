import React from 'react'
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css'
import {email, isRequired, maxLength, minLength} from "../../validation/validators";
import {Input} from "../common/FormValidationControl/FormValidationControl";
import {connect} from "react-redux";
import {logInUser} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const minLength5 = minLength(5)
const maxLength50 = maxLength(50)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.formDiv}>
                <div className={styles.formItem}>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[isRequired, minLength5, email]}/>
                </div>
                <div className={styles.formItem}>
                    <Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[isRequired, minLength5, maxLength50]}/>
                </div>
                <div className={styles.formItem}>
                    <Field name={'rememberMe'} component={Input} type={'checkbox'}/>
                    Remember me
                </div>
                <div className={props.error ? styles.loginErrorActive : styles.loginErrorNotActive}>
                    {props.error}
                </div>
                <div className={styles.formItem}>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.logInUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate replace to={'/profile'}/>
    }

    return <div className={styles.main}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logInUser})(Login)