import React from 'react';
import musicIcon from "../../assets/drawingIcon.svg";
import './header.styles.scss';

const Header = ({ themeToggle, darkMode }) => (
  <div className="header">
    <div className="directory-header">
      <div className="directory-image">
        <img src={musicIcon} alt="musicICon" className="dir-image" />
      </div>
      <div className="directory-text">
        <span className="text-name">Your favorite tunes</span>
        <span>
          All <span onClick={themeToggle}>🌞</span> and{" "}
          <span onClick={darkMode}>🌙</span>
        </span>
      </div>
    </div>
  </div>
);

export default Header 