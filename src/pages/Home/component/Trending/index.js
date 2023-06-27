import React from 'react'
import img1 from "../../assets/images/Primary Photo Placeholder (4).png"
import img2 from "../../assets/images/Secondary Photo Placeholder (4).png"
import img3 from "../../assets/images/Chưa xác nhận .svg"
import img4 from "../../assets/images/Primary Photo Placeholder (5).png"
import img5 from "../../assets/images/Primary Photo Placeholder (6).png"
import img6 from "../../assets/images/Secondary Photo Placeholder (8).png"
import img7 from "../../assets/images/Secondary Photo Placeholder (8).png"
import img8 from "../../assets/images/Secondary Photo Placeholder (9).png"

function Trending() {
    return (
        <section>
            <div className="trending">
                <div className="container">
                    <div className="trending-content">
                        <h2 className="trending-title">
                            Trending Collection
                        </h2>
                        <p className="trending-des">Checkout our weekly updated trending collection.</p>
                        <div className="trending-list">
                            <div className="trending-list-item">
                                <a href="./NFTPage.html"><img src={img1} alt="" /></a>
                                <ul className="trending__list-chile">
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img1} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img2} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link trending__list-item-all">
                                        <a className="trending__list-item " href="./NFTPage.html">
                                            1025+
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="trending__name">DSGN Animals</h3>
                                <div className="trending__info">
                                    <img className="trending__avatar" src={img3} alt="" />
                                    <h4 className="trending__info-name">MrFox</h4>
                                </div>
                            </div>
                            <div className="trending-list-item">
                                <a href="./NFTPage.html"><img src={img4} alt="" /></a>
                                <ul className="trending__list-chile">
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img5} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img6} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link trending__list-item-all">
                                        <a className="trending__list-item " href="./NFTPage.html">
                                            1025+
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="trending__name">Magic Mushrooms</h3>
                                <div className="trending__info">
                                    <img className="trending__avatar" src={img3} alt="" />
                                    <h4 className="trending__info-name">Shroomie</h4>
                                </div>
                            </div>
                            <div className="trending-list-item">
                                <a className="trending-list_img" href="./NFTPage.html">
                                    <img src={img5} alt="" />
                                </a>
                                <ul className="trending__list-chile">
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img7} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link">
                                        <a className="trending__list-item" href="./NFTPage.html">
                                            <img src={img8} alt="" />
                                        </a>
                                    </li>
                                    <li className="trending__link trending__list-item-all">
                                        <a className="trending__list-item " href="./NFTPage.html">
                                            1025+
                                        </a>
                                    </li>
                                </ul>
                                <h3 className="trending__name">Disco Machines</h3>
                                <div className="trending__info">
                                    <img className="trending__avatar" src={img3} alt="" />
                                    <h4 className="trending__info-name">BeKind2Robots</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending