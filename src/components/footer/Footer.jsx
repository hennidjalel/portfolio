import React from 'react'
import './footer.css'



const Footer = () => {
    return (
        <div className="footer">

            <div className="footer__container container">
                <h1 className="footer__title">Henni Djalel</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonial</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/?hl=fr" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/jalelhenni1" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/henni-djalel-446484180/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; henni. all rigths reserved</span>
            </div>
        </div>
    )
}

export default Footer