import React from 'react'
import './project.css'
import Project1 from '../../assets/img-project/project1.jpg'
import Project2 from '../../assets/img-project/project2.jpg'
import Project3 from '../../assets/img-project/project3.jpg'
import Project4 from '../../assets/img-project/project4.jpg'
import Project5 from '../../assets/img-project/project5.jpg'
import Project6 from '../../assets/img-project/project6.jpg'
import { motion } from 'framer-motion'



const Projects = () => {
    return (
        <section className="project section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="project__container container grid">

                <div className="project__content">
                    <div className="project__img">
                        <img src={Project1} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">Kasper</h3>
                    <motion.a href="https://h-kasper.netlify.app/" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>


                <div className="project__content">
                    <div className="project__img">
                        <img src={Project2} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">Portfolio</h3>
                    <motion.a href="https://templat-portfolio.netlify.app/" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>

                <div className="project__content">
                    <div className="project__img">
                        <img src={Project3} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">template</h3>
                    <motion.a href="https://h-template-one.netlify.app/" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>

                <div className="project__content">
                    <div className="project__img">
                        <img src={Project4} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">Bloger</h3>
                    <motion.a href="https://h-bloger.netlify.app/" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>

                <div className="project__content">
                    <div className="project__img">
                        <img src={Project5} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">DocPlanner</h3>
                    <motion.a href="https://h-docplanner.netlify.app" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>

                <div className="project__content">
                    <div className="project__img">
                        <img src={Project6} alt="" className="project__photo" />
                    </div>
                    <h3 className="project__name">EasyBank</h3>
                    <motion.a href="https://h-easybank.netlify.app/" className="contact__button"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ duration: 1 }}
                    >
                        View project
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Projects