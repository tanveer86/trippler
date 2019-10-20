import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <React.Fragment>
        <div class="container-fuild text-white font-weight-bolder bg-danger">
            <div class="row">
                <div class="col-10 p-3 ml-3">
                    <h2>Trippler.com: Get Wine Delivered to Your Home in Just 60 Minutes</h2>
                    <p>Get drinks delivered to your door with trippler.com. Whether you need a few of your favorite beers, a quick bottle of wine, or a full bar worth of liquor, ordering online is the fastest and easiest option.</p>
                </div>
                <div class="col-3 text-center">
                    <h4 class="font-weight-bolder">Top Categories</h4>
                    <Link to="/beer" class="text-white"><p>Beer</p></Link>
                    <Link to="/whiskey" class="text-white"><p>Whiskey</p></Link>
                    <Link to="/wine" class="text-white"><p>Wine</p></Link>
                    <Link to="/taquila" class="text-white"><p>Taquila</p></Link>
                </div>
                <div class="col-3 text-center">
                    <h4 class="font-weight-bolder">Top Brands</h4>
                    <Link to="/brand/kingfisher" class="text-white"><p>Kingfisher</p></Link>
                    <Link to="/brand/carlsberg" class="text-white"><p>Carlsberg</p></Link>
                    <Link to="/brand/blackdog" class="text-white"><p>BlackDog</p></Link>
                    <Link to="/brand/signature" class="text-white"><p>Signature</p></Link>
                </div>
                <div class="col-3 text-center">
                    <h4 class="font-weight-bolder">Top Selling</h4>
                    <Link to="#" class="text-white"><p>Kingfisher 1</p></Link>
                    <Link to="#" class="text-white"><p>Kingfisher 1</p></Link>
                    <Link to="#" class="text-white"><p>Kingfisher 1</p></Link>
                    <Link to="#" class="text-white"><p>Kingfisher 1</p></Link>
                </div>
                <div class="col-3 text-center">
                    <h4 class="font-weight-bolder">Top Bars</h4>
                    <Link to="#" class="text-white"><p>Madhuloka 1</p></Link>
                    <Link to="#" class="text-white"><p>Madhuloka 1</p></Link>
                    <Link to="#" class="text-white"><p>Madhuloka 1</p></Link>
                    <Link to="#" class="text-white"><p>Madhuloka 1</p></Link>
                </div>
                <div class="col-12 bg-primary text-center">
                    <p class="mt-3 font-weight-bolder">Copyright @ 2019 Trippler.com</p>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Footer;