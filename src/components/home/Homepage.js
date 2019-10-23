import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Slider from '../layout/Slider';
import Intro from '../layout/Intro';
import BestSellingProducts from '../layout/BestSellingProducts';
import FeaturedProducts from '../layout/FeaturedProducts';
import ProductDay from '../layout/ProducdDay';
import TopBrands from '../layout/TopBrands';
import Footer from '../layout/Footer';
import UserCheck from './UserCheck';

function Homepage(props) {
    
    return(
        <React.Fragment>
            <UserCheck />
            <TopBar props={props} />
            <Header />
            <Nav />
            <Slider />
            <Intro />
            <BestSellingProducts />
            <FeaturedProducts />
            <ProductDay />
            <TopBrands />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;