import React from 'react';
import {ReactComponent as Avater } from '../../assets/avater.svg'
import './sideBar.styles.scss'
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
      <div className="side-bar">
        <div className="avater">
          <Avater />
        </div>
        <span className="name">ofurum chiagoziem</span>
        <div className="menu-items">
          <Link to={'/'}>
            <span><i className="fas fa-headphones"></i> Discover</span>
          </Link>
          <Link to= "/search">
            <span>
              <i class="fas fa-search"></i> Search
            </span>
          </Link>
          <Link to="/favorite">
            <span>
              <i class="fas fa-heart"></i> Favorite
            </span>
          </Link>
          <Link to="/playlist">
            <span>
              <i class="fas fa-play-circle"></i> Playlists
            </span>
          </Link>
          <div>
            <span>
              <i class="fas fa-bars"></i> Charts
            </span>
          </div>
        </div>
      </div>
    );
}

export default SideBar;