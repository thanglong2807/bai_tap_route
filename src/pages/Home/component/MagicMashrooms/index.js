import React from 'react'
import eye from "../../assets/icons/Eye.svg"
function MagicMashrooms() {
    return (
        <section>
            <div className="mashrooms">
                <div className="mashrooms-bg">
                    <div className="container">
                        <div className="mashrooms-content">
                            <div className="mashrooms_left">
                                <h2 className="mashrooms_left-title">Magic Mashrooms</h2>
                                <a href="./NFTPage.html" className="mashrooms_left-btn btn">
                                    <img style={{ filter: "brightness(.5)" }} src={eye} alt="" />
                                    See NFT
                                </a>
                            </div>
                            <div className="mashrooms_right">
                                <span className="mashrooms_right-title">Auction ends in:</span>
                                <div className="mashrooms_right-clocks">
                                    <span id="hours">59</span>
                                    <span>:</span>
                                    <span id="minutes">59</span>
                                    <span>:</span>
                                    <span id="seconds">59</span>
                                </div>
                                <div className="mashrooms_right-clock">
                                    <span>Hours</span>

                                    <span>Minutes</span>

                                    <span>Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MagicMashrooms