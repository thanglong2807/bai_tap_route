import React from 'react'
import "./style.css"
import img1 from "../Home/assets/images/Marketplace/img/1.png"
import img2 from "../Home/assets/images/Marketplace/img/2.png"
import img3 from "../Home/assets/images/Marketplace/img/3.png"
import img4 from "../Home/assets/images/Marketplace/img/4.png"
import img5 from "../Home/assets/images/Marketplace/img/5.png"
import img6 from "../Home/assets/images/Marketplace/img/6.png"
import img7 from "../Home/assets/images/Marketplace/img/7.png"
import img8 from "../Home/assets/images/Marketplace/img/8.png"
import img9 from "../Home/assets/images/Marketplace/img/9.png"
import img10 from "../Home/assets/images/Marketplace/img/10.png"
import img11 from "../Home/assets/images/Marketplace/img/11.png"
import img12 from "../Home/assets/images/Marketplace/img/12.png"

import icon1 from "../Home/assets/images/Marketplace/icon/1.svg"
import icon2 from "../Home/assets/images/Marketplace/icon/2.svg"
import icon3 from "../Home/assets/images/Marketplace/icon/4.svg"
import icon4 from "../Home/assets/images/Marketplace/icon/4.svg"
import icon5 from "../Home/assets/images/Marketplace/icon/5.svg"
import icon6 from "../Home/assets/images/Marketplace/icon/6.svg"
import icon7 from "../Home/assets/images/Marketplace/icon/7.svg"
import icon8 from "../Home/assets/images/Marketplace/icon/8.svg"
import icon9 from "../Home/assets/images/Marketplace/icon/9.svg"
import icon10 from "../Home/assets/images/Marketplace/icon/10.svg"
import icon11 from "../Home/assets/images/Marketplace/icon/11.svg"
import icon12 from "../Home/assets/images/Marketplace/icon/12.svg"
import { v4 as uuidv4 } from 'uuid'
import MarketplaceItem from './MarketplaceItem'
const Marketplace = () => {
    const marketplace = [
        {
            id: uuidv4(),
            image: img1,
            name: 'Magic Mushroom 0325',
            nameUser: 'Shroomie',
            avataUser: icon1,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img2,
            name: 'Happy Robot 032',
            nameUser: 'BeKind2Robots',
            avataUser: icon2,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img3,
            name: 'Happy Robot 024',
            nameUser: 'BeKind2Robots',
            avataUser: icon3,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img4,
            name: 'Designer Bear',
            nameUser: 'Mr Fox',
            avataUser: icon4,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img5,
            name: 'Colorful Dog 0356',
            nameUser: 'Keepitreal',
            avataUser: icon5,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img6,
            name: 'Dancing Robot 0312',
            nameUser: 'Robotica',
            avataUser: icon6,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img7,
            name: 'Cherry Blossom Girl 035',
            nameUser: 'MoonDancer',
            avataUser: icon7,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img8,
            name: 'Space Travel',
            nameUser: 'NebulaKid',
            avataUser: icon8,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img9,
            name: 'Sunset Dimension',
            nameUser: 'Animakid',
            avataUser: icon9,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img10,
            name: 'Desert Walk',
            nameUser: 'Catch 22',
            avataUser: icon10,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img11,
            name: 'IceCream Ape 0324',
            nameUser: 'Ice Ape Club',
            avataUser: icon11,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },
        {
            id: uuidv4(),
            image: img12,
            name: 'Colorful Dog 0344',
            nameUser: 'PuppyPower',
            avataUser: icon12,
            price: '1.63 ETH',
            HighestBid: '0.33 wETH',
        },

    ]
    return (
        <main>
            <section>
                <div className="browse_marketplace">
                    <div className="container">
                        <div className="browse_marketplace-content">
                            <div className="browse_marketplace-title">Top Creators</div>
                            <div className="browse_marketplace-des">Check out top ranking NFT artists on the NFT Marketplace.</div>
                            <form className="browse_marketplace-form">
                                <input className="browse_marketplace-input" type="text" placeholder="Search your favourite NFTs" />
                                <button className="browse_marketplace-btn" type="submit">
                                    <img src="./images/icon/MagnifyingGlass.svg" alt="" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="created">
                    <div className="container">
                        <div className="creacted-handle">
                            <button className="creacted-handle-btn creacted-handle-btn-active">
                                NFTs
                                <span className="creacted-handle-number handle-number-active">302</span>
                            </button>
                            <button className="creacted-handle-btn">Collections
                                <span className="creacted-handle-number">67</span>
                            </button>

                        </div>
                    </div>
                    <div className="created-content">
                        <div className="container">
                            <div className="discovermore__list">
                                {marketplace.map(item => <MarketplaceItem key={item.id} data={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Marketplace