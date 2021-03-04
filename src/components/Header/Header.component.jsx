import React from 'react';
import musicIcon from "../../assets/drawingIcon.svg";
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="directory-header">
      <div className="directory-image">
        <img src={musicIcon} alt="image" className="dir-image" />
      </div>
      <div className="directory-text">
        <span className="text-name">Your favorite tunes</span>
        <span>All day and night</span>
      </div>
    </div>
  </div>
);

export default Header 