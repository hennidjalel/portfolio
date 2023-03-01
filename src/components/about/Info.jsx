import React from 'react'
import { motion } from 'framer-motion'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box"
            // initial={{ x: 100, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: false, amount: 1 }}
            // transition={{ duration: 0.5 }}
            >
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 Years Working</span>
            </div>

            <div className="about__box"
            // initial={{ x: 100, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: false, amount: 1 }}
            // transition={{ duration: 1.2 }}
            >
                <i className='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4 + projects</span>
            </div>

            <div className="about__box"
            // initial={{ x: 100, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: false, amount: 0 }}
            // transition={{ duration: 1.9 }}
            >
                <i className='bx bx-support about__icon' ></i>
                <h3 className="about__title">Suport</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info