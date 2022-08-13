import React from 'react'
import {Field, reduxForm} from "redux-form";
import styles from './Login.module.css'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.formDiv}>
                <div className={styles.formItem}>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div className={styles.formItem}>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div className={styles.formItem}>
                    <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me
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

let Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className={styles.main}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login