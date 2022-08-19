export const isRequired = value =>
    value
        ? undefined
        : 'Field is required'

export const maxLength = max => value =>
    value.length > max
        ? `Must be ${max} characters or less`
        : undefined

export const minLength = min => value =>
    value.length < min
        ? `Must be ${min} characters or more`
        : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined