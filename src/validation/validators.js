export const isRequired = value => {
    if (value) {
        return undefined
    }

    return 'Field is required'
}

export const maxLength = max => value => {
    if (value.length > max) {
        return `Must be ${max} characters or less`
    }

    return undefined
}

export const minLength = min => value => {
    if (value.length < min) {
        return `Must be ${min} characters or more`
    }

    return undefined
}