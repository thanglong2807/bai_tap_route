import React from 'react'
import img1 from '../../assets/icons/RocketLaunch.svg'
import img2 from '../../assets/images/Image Placeholder.png'
import img3 from '../../assets/images/Avatar.png'
function Discover() {
    return (
        <section>
            <div className="discover">
                <div className="container">
                    <div className="discover-content">
                        <div className="discover-left">
                            <h2 className="discover-title">
                                Discover digital art & Collect NFTs
                            </h2>
                            <p className="discover-des">
                                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
                                than 20k NFT artists.
                            </p>
                            <div className="discover_item">
                                <a href="./CreateAccount.html" className="discover-btn btn">
                                    <img src={img1} alt="icon" />
                                    <span>Get Started</span>
                                </a>
                                <ul className="discover-list">
                                    <li className="discover-list-item">
                                        <h3 className="discover-list-item-title">240k+ </h3>
                                        <span className="discover-list-item-des">Total Sale</span>
                                    </li>
                                    <li className="discover-list-item">
                                        <h3 className="discover-list-item-title">100k+</h3>
                                        <span className="discover-list-item-des">Auctions</span>
                                    </li>
                                    <li className="discover-list-item">
                                        <h3 className="discover-list-item-title">240k+</h3>
                                        <span className="discover-list-item-des">Artists</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="discover-right" >
                            <a href="./ArtistPage.html" className="discover-right-a">
                                <img src={img2} alt="img" />
                                <div className="discover-walking">
                                    <h3 className="discover-walking-title">Space Walking</h3>
                                    <a href="./ArtistPage.html" className="discover-walking-info">
                                        <img className="discover-walking-icon" src={img3} alt="" />
                                        <h4 className="discover-walking-info-title">Animakid</h4>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover