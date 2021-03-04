import React from 'react';
import Directory from '../../components/Directory/directory.component'
import './HomePage.styles.scss';
import Header from '../../components/Header/Header.component';
import PlayBox from '../../components/PlayBox/PlayBox.component';

const HomePage = () => (
    <div className="home-page">
        <Header />
        <Directory />
        <PlayBox />
    </div>
)

export default HomePage;