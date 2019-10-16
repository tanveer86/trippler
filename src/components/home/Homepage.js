import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Slider from '../layout/Slider';


function Homepage() {
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <Slider />
        </React.Fragment>
    )
}

export default Homepage;