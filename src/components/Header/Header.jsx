import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { useIntl } from 'react-intl';

const Header = ({ locale, handleLanguageChange }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="header">
      <div className="left">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="ri">
        <ul className='header-menu'>
          <li><a href="#main">{formatMessage({ id: 'home' })}</a></li>
          <li><a href="#plan">{formatMessage({ id: 'plans' })}</a></li>
          <li><a href="#programs">{formatMessage({ id: 'programs' })}</a></li>
          <li><a href="#testimonials">{formatMessage({ id: 'testimonials' })}</a></li>
          <li><a href="#join">{formatMessage({ id: 'joinUs' })}</a></li>
          <li>
            <select className="language-switcher" onChange={handleLanguageChange} value={locale}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
