import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import gympic1 from '../../assets/gympic1.jpg'
import gympic2 from '../../assets/gympic2.jpg'
import gympic3 from '../../assets/gympic3.jpg'
import Akatsuki from '../../assets/Akatsuki.png'

const Programs = () => {
    return (
        <div className='Programs' id="programs">
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <a href="#testimonials">Join Us</a>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>

            <div className='Extra-info'>
                <span className='stroke-text'>And Many More !</span>
                <div className='mini-gallery1'>
                    <img src={gympic1} alt="" />
                    <img src={gympic2} alt="" />
                    <img src={gympic3} alt="" />
                </div>
                <div className='line-break'>
                    <img src={Akatsuki} alt="" />
                    <img src={Akatsuki} alt="" /> 
                    <img src={Akatsuki} alt="" />
                    <img src={Akatsuki} alt="" />
                </div>

            </div>


        </div>



    )
}

export default Programs
