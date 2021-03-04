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
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path={'/:id'} component={PlayListPage} />
      </Switch>
    </div>
  );
}

export default App;
