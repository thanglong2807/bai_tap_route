import React from 'react'

function Digest() {
    return (
        <section>
            <div className="digest">
                <div className="container">
                    <div className="digest-content">
                        <div className="digest_imamge">

                        </div>
                        <div className="digest_form">
                            <h2 className="digest_form--title">Join our weekly digest</h2>
                            <p className="digest_form--des">Get exclusive promotions & updates straight to your inbox.
                            </p>
                            <form className="digest_form--input" action="">
                                <input className="digest_form-input" type="email" placeholder="Enter your email here" />
                                <button className="digest_form--input-btn btn">
                                    <img src="./images/icon/EnvelopeSimple.svg" alt="" />
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Digest