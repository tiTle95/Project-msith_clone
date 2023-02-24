import React from "react";
import './Footer.css'
import logo from './img/logo.png'
import language from './img/language.png'

function Footer(){
    return(
        <footer className="msiFooter">
            <div className="msiFooter__container">
                <nav className="shortcut">
                    <ul className="shortcut__menu">
                        <li className="shortcut__item">
                            <div className="shortcut__field">
                                COMMUNITY
                            </div>
                            <ul className="shortcut__submenu"></ul>
                        </li>
                        <li className="shortcut__item">
                            <div className="shortcut__field">
                                SUPPORT
                            </div>
                            <ul className="shortcut__submenu"></ul>
                        </li>
                        <li className="shortcut__item">
                            <div className="shortcut__field">
                                NEWS
                            </div>
                            <ul className="shortcut__submenu"></ul>
                        </li>
                        <li className="shortcut__item">
                            <div className="shortcut__field">
                                ABOUT US
                            </div>
                            <ul className="shortcut__submenu"></ul>
                        </li>
                        <li className="shortcut__item">
                            <div className="shortcut__field">
                                MEDIA
                            </div>
                            <ul className="shortcut__submenu"></ul>
                        </li>
                    </ul>
                </nav>

                <nav class="info">
                    <div class="copyright">
                        <img class="copyright__logo" width="50" height="15" src={logo} alt="msi"/>
                        <p class="copyright__legal">Copyright © 2023 Micro-Star INT'L CO., LTD. All rights reserved.</p>
                    </div>
                    <ul class="service">
                        <li class="service__item">
                            <a class="service__link" href="/page/cookie-policy">Cookie Policy</a>
                        </li>
                        <li class="service__item">
                            <a class="service__link" href="/page/privacy-policy">นโยบายความเป็นส่วนตัว</a>
                        </li>
                        <li class="service__item">
                            <a class="service__link" href="/page/website-terms-of-use">Terms of Use</a>
                        </li>
                        <li class="service__item">
                            <a class="service__link" href="/about/contact-us">ติดต่อเรา</a>
                        </li>
                        <li class="service__item">
                            <a class="service__link" href="#">
                                <img width="16" height="16" src={language} alt="msi icon"/>
                                Thailand / ภาษาไทย
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
export default Footer