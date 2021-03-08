import React from 'react';
import Directory from '../../components/Directory/directory.component'
import './HomePage.styles.scss';
import Header from '../../components/Header/Header.component';
import PlayBox from '../../components/PlayBox/PlayBox.component';
import { Switch, Route } from "react-router-dom";
import PlayListPage from "../../pages/Playlist/playlist.component";
const HomePage = ({ themeToggle, darkMode }) => (
  <div className="home-page">
    <Header themeToggle={themeToggle} darkMode={darkMode} />
    <Switch>
      <Route exact path="/" component={Directory} />
      <Route path={"/:id"} component={PlayListPage} />
    </Switch>
    <PlayBox />
  </div>
);

export default HomePage;