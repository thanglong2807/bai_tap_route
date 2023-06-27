import React from 'react'
import "./style.css"
import img1 from "../Home/assets/images/Image Placeholder (1).png"
import icon1 from "../Home/assets/icons/UserSign.svg"
import icon2 from "../Home/assets/icons/LockKeySign.svg"
const Signin = () => {
    return (
        <main class="main">
            <div class="main-content">
                <img class="main_img" src={img1} alt="" />
                <div class="main_item">
                    <h1 class="main_title">Sign in</h1>
                    <p class="main_des">Welcome! Login and start creating, collecting and selling NFT
                    </p>
                    <form class="main_list" id="handleSubmitSignin">
                        <div class="form_sign-item">

                            <img src={icon1} alt="" />
                            <input id="userName" type="text" class="form_sign-input" placeholder="Username" />

                        </div>

                        <div class="form_sign-item">

                            <img src={icon2} alt="" />
                            <input id="userPassword" type="password" class="form_sign-input" placeholder="Password" />

                        </div>

                        <button class="form_sign-item form_sign-btn" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Signin