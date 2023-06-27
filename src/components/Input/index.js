import React from 'react'

function Input(props) {
    const {
        name,
        type,
        classInput,
        value,
        onChange,
    } = props
    return (
        <input
            name={name}
            type={type}
            className={`${classInput}`}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input