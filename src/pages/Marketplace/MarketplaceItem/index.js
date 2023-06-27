import React from 'react'
import { Link } from 'react-router-dom'

const MarketplaceItem = ({ data }) => {
    return (
        <div class="discovermore__item">
            <Link to='/ArtistPage' style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <img class="discovermore__item-img" src={data.image} alt={data.name} />
                <div class="discovermore__item-botton">
                    <h3 class="discovermore__item-name--img">{data.name}</h3>
                    <div class="discovermore__item-info">
                        <img src={data.avataUser} alt={data.nameUser}
                            class="discovermore__item-avatar" />
                        <h5 class="discovermore__item-name">{data.nameUser}</h5>
                    </div>
                    <div class="discovermore__item-price">
                        <div class="discovermore--price-item">
                            <span class="discovermore--price-name">Price</span>
                            <h6 class="discovermore--price">{data.price}</h6>
                        </div>
                        <div class="discovermore--price-item">
                            <span class="discovermore--price-name">Highest Bid</span>
                            <h6 class="discovermore--price">{data.HighestBid}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MarketplaceItem