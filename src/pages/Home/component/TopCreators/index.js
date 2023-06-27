import React from 'react'
import CreatorsItem from './CreatorsItem'
import img1 from '../../assets/images/Asset 12 2.png'
import img2 from '../../assets/images/Asset 12 3.png'
import img3 from '../../assets/images/Asset 12 4.png'
import img4 from '../../assets/images/Asset 12 5.png'
import img5 from '../../assets/images/Asset 12 6.png'
import img6 from '../../assets/images/Asset 12 7.png'
import img7 from '../../assets/images/Asset 12 8.png'
import img8 from '../../assets/images/Asset 12 9.png'
import img9 from '../../assets/images/Asset 12 10.png'
import img10 from '../../assets/images/Asset 12 11.png'
import img11 from '../../assets/images/Asset 12 12.png'
import img12 from '../../assets/images/Asset 12 13.png'
function TopCreators() {
    const creators = [
        {
            id: 1,
            img: img1,
            name: 'Keepitreal',
            price: '34.53 ETH'
        },
        {
            id: 2,
            img: img2,
            name: 'DigiLab',
            price: '34.53 ETH'
        },
        {
            id: 3,
            img: img3,
            name: 'GravityOne',
            price: '34.53 ETH'
        },
        {
            id: 4,
            img: img4,
            name: 'Juanie',
            price: '34.53 ETH'
        },
        {
            id: 5,
            img: img5,
            name: 'BlueWhale',
            price: '34.53 ETH'
        },
        {
            id: 6,
            img: img6,
            name: 'mr fox',
            price: '34.53 ETH'
        },
        {
            id: 7,
            img: img7,
            name: 'Shroomie',
            price: '34.53 ETH'
        },
        {
            id: 8,
            img: img8,
            name: 'robotica',
            price: '34.53 ETH'
        },
        {
            id: 9,
            img: img9,
            name: 'RustyRobot',
            price: '34.53 ETH'
        },
        {
            id: 10,
            img: img10,
            name: 'RustyRobot',
            price: '34.53 ETH'
        },
        {
            id: 11,
            img: img11,
            name: 'Dotgu',
            price: '34.53 ETH'
        },
        {
            id: 12,
            img: img12,
            name: 'Ghiblier',
            price: '34.53 ETH'
        },
    ];
    return (
        <section>
            <div className="creators">
                <div className="container">
                    <div className="creators-content">
                        <h2 className="creators-title">
                            Top creators
                        </h2>
                        <p className="creators-des">
                            Checkout Top Rated Creators on the NFT Marketplace
                            <a href="./Rankings.html" className="btn creators-btn">
                                <img src="./images/icon/RocketLaunch.svg" alt="" />
                                View Rankings
                            </a>
                        </p>
                        <div className="creators__list">
                            {creators.map((item, i) => <CreatorsItem index={i + 1} key={item.id} data={item} />)}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default TopCreators