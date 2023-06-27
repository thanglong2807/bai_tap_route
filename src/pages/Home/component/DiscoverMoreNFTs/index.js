import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import eye from "../../assets/icons/Eye.svg"
import img1 from "../../assets/images/Image_discover1.png"
import img2 from "../../assets/images/Avatar_discover1.png"
import img3 from "../../assets/images/PhotoIcon5.png"
import img4 from "../../assets/images/Image Placeholder (2).png"
import DiscoverItem from './DiscoverItem'
function DiscoverMoreNFTs() {
    const discoverItem = [
        {
            id: uuidv4(),
            nameImg: "Distant Galaxy",
            title: "MoonDancer",
            avata: img2,
            img: img1,
            price: "1.63 ETH",
            price2: "0.33 wETH",
        },
        {
            id: uuidv4(),
            nameImg: "Life On Edena",
            title: "NebulaKid",
            avata: img2,
            img: img3,
            price: "1.63 ETH",
            price2: "0.33 wETH",
        },
        {
            id: uuidv4(),
            nameImg: "AstroFiction",
            title: "Spaceone",
            avata: img2,
            img: img4,
            price: "1.63 ETH",
            price2: "0.33 wETH",
        },
    ]
    return (
        <section>
            <div className="discovermore">
                <div className="container">
                    <div className="discovermore-content">
                        <h2 className="discovermore__title">Discover More NFTs</h2>
                        <p className="discovermore__des">
                            Explore new trending NFTs
                            <a href="./Marketplace.html" className="discovermore__btn btn">
                                <img src={eye} alt="" />
                                See All
                            </a>
                        </p>
                        <div className="discovermore__list">
                            {discoverItem.map(item => <DiscoverItem key={item.id} data={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverMoreNFTs