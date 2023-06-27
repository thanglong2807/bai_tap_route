import React from 'react'
import img1 from "../../assets/icons/works.svg"
import img2 from "../../assets/icons/works2.svg"
import img3 from "../../assets/icons/works3.svg"
function Works() {
    return (
        <section>
            <div className="works">
                <div className="container">
                    <div className="works-content">
                        <h2 className="works_title">How it works</h2>
                        <p className="works_des">Find out how to get started</p>
                        <div className="works_list">

                            <div className="works_item">
                                <img className="works_item-icon" src={img1} alt="" />
                                <div className="works_list-content">
                                    <h3 className="works_list-content--title">
                                        Setup Your wallet
                                    </h3>
                                    <p className="works_list-content--des">Set up your wallet of choice. Connect it to
                                        the
                                        Animarket by clicking the wallet
                                        icon in the top right corner.</p>
                                </div>
                            </div>
                            <div className="works_item">
                                <img className="works_item-icon" src={img2} alt="" />
                                <div className="works_list-content">
                                    <h3 className="works_list-content--title">
                                        Create Collection
                                    </h3>
                                    <p className="works_list-content--des">Upload your work and setup your collection.
                                        Add a
                                        description, social links and floor price.</p>
                                </div>
                            </div>
                            <div className="works_item">
                                <img className="works_item-icon" src={img3} alt="" />
                                <div className="works_list-content">
                                    <h3 className="works_list-content--title">
                                        Start Earning
                                    </h3>
                                    <p className="works_list-content--des">Choose between auctions and fixed-price
                                        listings.
                                        Start earning by selling your NFTs or trading others.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Works