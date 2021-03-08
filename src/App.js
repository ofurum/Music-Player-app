import React,{useState} from 'react'
import Sidebar from '../src/components/sideBar/sideBar.component'
import HomePage from './pages/HomePage/HomePage.component';
import { ThemeProvider } from "styled-components";
import {GlobalStyles} from './components/globalStyles/globalStyles';
import {lightTheme, darkTheme} from './components/Themes/Themes'
import "./App.css";

const App =() =>{
    const [theme, setTheme] = useState("light");
const themeToggler = () => {
  if(theme === "dark") return setTheme("light"); 
}
const darkMode = () => {
  if(theme === "light") return setTheme("dark");
}
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Sidebar />
          <HomePage themeToggle={themeToggler}  darkMode={darkMode} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
