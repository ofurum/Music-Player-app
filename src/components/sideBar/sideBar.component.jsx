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
          <Link to={"/"}>
            <span>
              <i className="fas fa-headphones"></i>{" "}
              <span className="discover">Discover</span>
            </span>
          </Link>
          <Link to="/search">
            <span>
              <i class="fas fa-search"></i>{" "}
              <span className="search">Search</span>
            </span>
          </Link>
          <Link to="/favorite">
            <span>
              <i class="fas fa-heart"></i>{" "}
              <span className="favorite">Favorite</span>
            </span>
          </Link>
          <Link to="/playlist">
            <span>
              <i class="fas fa-play-circle"></i>{" "}
              <span className="playlistss">Playlists</span>
            </span>
          </Link>
          <div>
            <span>
              <i class="fas fa-bars"></i>{" "}
              <span className="charts">Charts</span>
            </span>
          </div>
        </div>
      </div>
    );
}

export default SideBar;