import React from 'react'
import Logo from './assets/icons/logo.svg'
import User from './assets/icons/User.svg'
import NavMenu from './assets/icons/nav-menu.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <h1>
                        <Link to="/">
                            <img className="header-logo" src={Logo} alt="logo" />
                        </Link>
                    </h1>
                    <img id="check-navbar" className="header_nav" src={NavMenu} alt="" />
                    <div id='active' >
                        <div className="header-list" >
                            <ul className="header-nav">
                                <li className="header-nav-link">
                                    <Link to="/marketplace" className="header_link font-small">Marketplace</Link>
                                </li>
                                <li className="header-nav-link">
                                    <Link to="/rankings" className="header_link font-small">Rankings</Link>
                                </li>
                                <li className="header-nav-link">
                                    <Link to="/connectWallet" className="header_link font-small">Connect a wallet</Link>
                                </li>
                            </ul>
                            <Link to="/createAccount" className="header-btn btn">
                                <img className="header-btn-logo" src={User} alt="Sign Up" />
                                <span className="header-btn-text">Sign Up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header