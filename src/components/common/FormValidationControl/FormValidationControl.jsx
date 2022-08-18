import React from "react"
import style from './FormValidationControl.module.css'

const FormValidationControl = (props) => {
    const hasError = props.meta.error && props.meta.touched

    return <div>
        {props.children}
        <span className={hasError ? style.activeError : style.notActiveError}>
            {props.meta.error}
        </span>
    </div>
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormValidationControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormValidationControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormValidationControl {...props}>
        <input {...input} {...restProps}/>
    </FormValidationControl>
}