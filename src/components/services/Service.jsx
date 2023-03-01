import React from 'react'
import './service.css';


const Service = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button">
                        View More {" "}
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">
                                Providing quality work to client and copanies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-arrow services__icon"></i>
                        <h3 className="services__title">
                            Ui/Ux <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button">
                        View More {" "}
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">
                                Providing quality work to client and copanies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            
                        </h3>
                    </div>

                    <span className="services__button">
                        View More {" "}
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">
                                Providing quality work to client and copanies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interaction.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service