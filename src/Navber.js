import React from "react";
import './Navber.css'
import menu from './img/menu.png'
import logo from './img/logo.png'
import chevron from './img/chevron.png'
import person from './img/person.png'
import search from './img/search.png'

function Navber() {
    return(
        <header id="msiHeader">
            <nav className="msiNav">
                <div className="mainArea msiNav__container">
                    <span className="mainArea__hamberger">
                        <img src={menu} />
                        
                    </span>
                    <a className="homeLink" href="#">
                        <img src={logo} />
                    </a>
                    <div className="mainArea__main">
                        
                        <div className="menuAction">
                            <div className="menuAction__item"><button className="navDrop">Products</button></div>
                            <div className="menuAction__item"><button className="navDrop">ODM Solutions</button></div>
                            <div className="menuAction__item"><button className="navDrop">What's New</button></div>
                            <div className="menuAction__item"><a href="#" className="navLink">Support</a></div>
                        </div>
                        <div className="mainArea__operations">
                            <div className="operationAction">
                                <button className="opDrop"><img src={person}/></button>
                            </div>
                            <div className="operationAction">
                                <button className="opDrop"><img src={search}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
                <ul className="mobileMenu">
                    <li className="mobileMenu__item">
                        <div className="msiNav__container">
                            <button className="action">
                                <span className="action__title">Products</span>
                                <span><img src={chevron}/></span>
                            </button>
                        </div>
                    </li>
                    <li className="mobileMenu__item">
                        <div className="msiNav__container">
                            <button className="action">
                                <span className="action__title">ODM Solutions</span>
                                <span><img src={chevron}/></span>
                            </button>
                        </div>
                    </li>
                    <li className="mobileMenu__item">
                        <div className="msiNav__container">
                            <button className="action">
                                <span className="action__title">What's New</span>
                                <span><img src={chevron}/></span>
                            </button>
                        </div>
                    </li>
                    <li className="mobileMenu__item">
                        <div className="msiNav__container">
                            <a className="action" href="#">
                                <span className="action__title">Support</span>
                                <span><img src={chevron}/></span>
                            </a>
                        </div>
                    </li>
                </ul>
        </header>
    )
}


export default Navber