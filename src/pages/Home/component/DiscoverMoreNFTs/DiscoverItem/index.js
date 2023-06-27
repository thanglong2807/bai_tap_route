import React from 'react'

function DiscoverItem({ data }) {
    return (
        <div className="discovermore__item">
            <img className="discovermore__item-img" src={data.img} alt="" />
            <div className="discovermore__item-botton">
                <h3 className="discovermore__item-name--img">{data.nameImg}</h3>
                <div className="discovermore__item-info">
                    <img src={data.avata} alt="/"
                        className="discovermore__item-avatar" />
                    <h5 className="discovermore__item-name">{data.title}</h5>
                </div>
                <div className="discovermore__item-price">
                    <div className="discovermore--price-item">
                        <span className="discovermore--price-name">Price</span>
                        <h6 className="discovermore--price">{data.price}</h6>
                    </div>
                    <div className="discovermore--price-item">
                        <span className="discovermore--price-name">Highest Bid</span>
                        <h6 className="discovermore--price">{data.price2}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverItem