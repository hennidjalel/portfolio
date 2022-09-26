import React, { useState } from 'react';
import "./header.css"



const Header = () => {


    /* ============ Change Background Header============== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })


    /* ============ Toggle Menu ============== */
    const [toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Henni
                </a>

                <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
                    <ul className="nav__list ">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-estate  nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header