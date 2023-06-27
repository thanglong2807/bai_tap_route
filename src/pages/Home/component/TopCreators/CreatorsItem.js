import React from 'react'

function CreatorsItem({ data, index }) {
    return (
        <div className="creators__link creators__link--width">
            <span className="creators__link-id">{index}</span>
            <img className="creators__link-avatar" src={data.img} alt="" />
            <div className="creators__link-info">
                <h3 className="creators__link-name">{data.name}</h3>
                <p className="creators__link-price">
                    Total Sales:
                    <span>{data.price}</span>
                </p>
            </div>
        </div>
    )
}

export default CreatorsItem