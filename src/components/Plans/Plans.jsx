import React from 'react'
import law from "../../assets/law.png"
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div>
      <div className='line-break2'>
        <img className='small-image' src={law} alt="" />
        <img className='small-image' src={law} alt="" />
        <img className='small-image' src={law} alt="" />
        <img className='small-image' src={law} alt="" />
      </div>

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

    </div>



  )
}

export default Plans
