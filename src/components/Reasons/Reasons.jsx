import React from 'react';
import './Reasons.css';
import tick from "../../assets/tick.png";
import gympic5 from "../../assets/gympic5.jpg";
import gympic6 from "../../assets/gympic6.png";
import gympic7 from "../../assets/gympic7.jpeg";
import gympic8 from "../../assets/gympic8.jpg";
import gympic9 from "../../assets/gympic9.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import { useIntl } from 'react-intl';

const Reasons = () => {
    const { formatMessage } = useIntl();

    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={gympic9} alt="" />
                <img src={gympic5} alt="" />
                <img src={gympic6} alt="" />
                <img src={gympic7} alt="" />
            </div>

            <div className="right-r">
                <span>{formatMessage({ id: 'reasons' })}</span>

                <div>
                    <span className="stroke-text">{formatMessage({ id: 'why' })} </span>
                    <span>{formatMessage({ id: 'chooseUs' })}</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>{formatMessage({ id: 'team' })}</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>{formatMessage({ id: 'optimize' })}</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>{formatMessage({ id: 'trainingPlan' })}</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>{formatMessage({ id: 'trusted' })}</span>
                    </div>
                </div>
                <span style={{
                    fontSize: "1.5rem",
                    marginTop: "2rem"
                }}>{formatMessage({ id: 'partners' })}</span>

                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Reasons;
