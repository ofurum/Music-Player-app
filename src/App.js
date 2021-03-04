import React from 'react'
import Sidebar from '../src/components/sideBar/sideBar.component'
import HomePage from './pages/HomePage/HomePage.component';
import { Switch, Route} from "react-router-dom";
import PlayListPage from '../src/pages/Playlist/playlist.component'
import "./App.css";
const App =() =>{
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
