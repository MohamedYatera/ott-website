import React from "react";
import "./main.css";
import Heart from "../../assets/heart.png";
import goku from "../../assets/goku.png";
import bgimage from "../../assets/bgimage.png";
import NumberCounter from 'number-counter';
import { motion } from "framer-motion";
import { useIntl } from 'react-intl';

const Main = () => {
  const { formatMessage } = useIntl();
  const transition = { type: 'spring', duration: 3 };

  return (
    <div className="main">
      <div className="blur main-blur"></div>
      <div className="left-h">
        <div className="ad-slogan">
          <motion.div
            initial={{ left: '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>{formatMessage({ id: 'slogan' })}</span>
        </div>
        <div className="main-text">
          <div>
            <span className="stroke-text">{formatMessage({ id: 'unleash' })}</span>
            <span>{formatMessage({ id: 'your' })}</span>
          </div>
          <div>
            <span>{formatMessage({ id: 'potential' })}</span>
          </div>
          <div>
            <span>{formatMessage({ id: 'intro' })}</span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={190} start={100} delay='4' preFix="+" />
            </span>
            <span>{formatMessage({ id: 'expertCoaches' })}</span>
          </div>
          <div>
            <span><NumberCounter end={600} start={100} delay='4' preFix="+" /></span>
            <span>{formatMessage({ id: 'membersJoined' })}</span>
          </div>
          <div>
            <span><NumberCounter end={25} start={10} delay='4' preFix="+" /></span>
            <span>{formatMessage({ id: 'fitnessPrograms' })}</span>
          </div>
        </div>
        <div className="main-buttons">
          <button className="btn">{formatMessage({ id: 'getStarted' })}</button>
          <button className="btn">{formatMessage({ id: 'learnMore' })}</button>
        </div>
      </div>
      <div className="right-h">
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>{formatMessage({ id: 'heartRate' })}</span>
          <span>{formatMessage({ id: 'bpm' })}</span>
        </motion.div>
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

export default Main;
