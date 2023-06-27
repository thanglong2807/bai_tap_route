import React from 'react'

function Button(props) {
    const {
        title,
        onClick,
        classBtn,
    } = props
    return (
        <button
            onClick={onClick}
            className={` btn ${classBtn}`}
        >
            {title}
        </button>
    )
}

export default Button