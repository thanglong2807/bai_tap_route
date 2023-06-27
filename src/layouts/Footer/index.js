import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer_top">
                        <div className="footer_top-lists ">
                            <h3 className="footer_top-title">
                                <a href="">
                                    <img src="images/img/Logo.png" alt="" />
                                </a>
                            </h3>
                            <ul className="footer_top-list">
                                <li>
                                    <a href="">NFT marketplace UI created with Anima for Figma.</a>
                                </li>
                                <li>
                                    <a href="">Join our community</a>
                                </li>
                                <li className="footer_top-icon">
                                    <a href="">
                                        <img src="./images/icon/DiscordLogo.svg" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="./images/icon/YoutubeLogo.svg" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="./images/icon/TwitterLogo.svg" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="./images/icon/InstagramLogo.svg" alt="" />
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div className="footer_top-lists ">
                            <h3 className="footer_top-title">
                                <a href="">
                                    Explore
                                </a>
                            </h3>
                            <ul className="footer_top-list">
                                <li>
                                    <a href="Marketplace.html">Marketplace</a>
                                </li>
                                <li>
                                    <a href="Rankings.html">Rankings</a>
                                </li>
                                <li>
                                    <a href="">
                                        Connect a wallet
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div className="footer_top-list footer_form">
                            <h3 className="footer_top-title">
                                <a href="">
                                    Join our weekly digest
                                </a>
                            </h3>
                            <p>Get exclusive promotions & updates straight to your inbox.</p>
                            <form className="digest_form--input footer_forms" action="">
                                <input className="digest_form-input" type="email" placeholder="Enter your email here" />
                                <button className="digest_form--input-btn btn" >
                                    <img src="./images/icon/EnvelopeSimple.svg" alt="" />
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr className="footer_line" />
                    <div className="footer_botton">
                        <p>
                            Ⓒ NFT Market. Use this template freely.
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer