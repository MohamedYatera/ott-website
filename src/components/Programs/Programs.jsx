import React from 'react'
import './Programs.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import gympic1 from '../../assets/gympic1.jpg'
import gympic2 from '../../assets/gympic2.jpg'
import gympic3 from '../../assets/gympic3.jpg'
import Akatsuki from '../../assets/Akatsuki.png'

const Programs = () => {
    return (
        <div className='Programs'>
            <div className="plans-container" id='plan'>
                <div className='blur plans-blur-1'> </div>
                <div className='blur plans-blur-2'> </div>
                <div className="programs-header2" style={{ gap: '2rem', marginTop: "4rem" }}>
                    <span>Awaken Your Power</span>
                    <span className='stroke-text'>and Conquer</span>
                    <span>New Heights!</span>
                </div>

                {/* plans card */}
                <div className="plans">
                    {plansData.map((plan, i) => (
                        <div className='plan' key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, i) => (
                                    <div className='feature'>
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div><span>See more benefits </span></div>
                            <a href='#testimonials' className='btn' style={{ color: 'black', borderRadius: '10px' }}>Join now</a>


                        </div>

                    ))}

                </div>
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
