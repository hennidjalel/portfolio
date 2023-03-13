import React, { useState } from 'react'
import './qualification.css'
import { motion } from 'framer-motion'


const Qualification = () => {


    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index);
    };



    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    } onClick={() => toggleTab(1)}>

                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    } onClick={() => toggleTab(2)}>

                        <i className="uil uil-briefcase-alt qualification__icon "></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                    // transition={{ staggerChildren: 0.5 }}
                    >
                        <div className="qualification__data">
                            <div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="qualification__title">Full Stack developer</h3>
                                <span className="qualification__subtitle">GomyCode</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="qualification__title">Système informatique</h3>
                                <span className="qualification__subtitle">University 08 mai 1945</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="qualification__title"> Ingénierie de système informatique et logiciel.</h3>
                                <span className="qualification__subtitle">university 08 mai 1945</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2015 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="qualification__title">Baccalaureate Scientific</h3>
                                <span className="qualification__subtitle">Soudani Med Torqui</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2015
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front-end developer </h3>
                                <a href='https://newdigitalway.dz/' target="_blank" className="qualification__subtitle" style={{ color: "inherit" }}>New Digital Way</a>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt">November 2022</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> </h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification