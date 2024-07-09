import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import goku from "../../assets/goku.png";
import bgimage from "../../assets/bgimage.png";
import NumberCounter from 'number-counter';
import {motion} from "framer-motion";

const main = () => {

  const transition = {type: 'spring', duration: 3}
  return (
    <div className="main">
      <div className="blur main-blur"></div>
      <div className="left-h">
        <Header />
        {/*ad-slogan*/}

        <div className="ad-slogan">
          <motion.div
            initial={{ left: '238px'}}
            whileInView={{ left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>Transform Sweat into Strength</span>
        </div>

        {/*main-text*/}
        <div className="main-text">
          <div>
            <span className="stroke-text">Unleash </span>
            <span>Your</span>
          </div>
          <div>
            <span>Full Potential</span>
          </div>

          <div>
            <span>
              Experience OTT Anime Gym, your ultimate destination for
              anime-inspired fitness. Dive into our diverse programs and unleash
              your inner hero through cutting-edge workouts and immersive
              training
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={190} start={100} delay='4' preFix="+" />

            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span><NumberCounter end={600} start={100} delay='4' preFix="+" /></span>
            <span>members joined</span>
          </div>

          <div>
            <span><NumberCounter end={25} start={10} delay='4' preFix="+" /></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/*main buttons*/}
        <div className="main-buttons">
          <button className="btn">Get Started </button>
          <button className="btn"> Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn"> Join Us</button>

        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

        {/*main images*/}
        <img src={goku} alt="" className="goku-image" />

        <motion.img
            initial={{ right: '-11rem' }}
            whileInView={{ right: '15rem' }}
            transition={transition}
            src={bgimage}
            alt=""
            className="bg-image"
          />

       
      </div>
    </div>
  );
};

export default main;
