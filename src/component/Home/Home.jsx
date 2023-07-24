import React from 'react';
import Header from '../Header/Header';
import HomeCards from '../HomeCards/HomeCards';
import Gallery from '../Gallery/Gallery';
import Research from '../Research/Research';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <HomeCards></HomeCards>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;