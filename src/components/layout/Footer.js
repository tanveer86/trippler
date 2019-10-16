import React from 'react';

function Footer(){
    return(
        <React.Fragment>
        <div class="container-fuild text-white font-weight-bolder" style={{backgroundColor: "#000000"}}>
            <div class="row">
                <div class="col-10 p-3 ml-3">
                    <h2>Trippler.com is the only online wine delivery provider in India</h2>
                    <p>Get drinks delivered to your door with trippler.com. Whether you need a few of your favorite beers, a quick bottle of wine, or a full bar worth of liquor, ordering online is the fastest and easiest option.</p>
                </div>
                <div class="col-3">
                    <h4>Top Categories</h4>
                    <ul>
                        <li>Beer</li>
                        <li>Wine</li>
                        <li>Wiskey</li>
                        <li>Rum</li>
                        <li>Vodka</li>
                        <li>Taqela</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>Top Brands</h4>
                    <ul>
                        <li>Kingfisher</li>
                        <li>Carlsberg</li>
                        <li>Signature</li>
                        <li>Black Dog</li>
                        <li>Royal Stag</li>
                        <li>Tuborg</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>Top Selling Products</h4>
                    <ul>
                        <li>Kingfisher 1</li>
                        <li>Kingfisher 1</li>
                        <li>Kingfisher 1</li>
                        <li>Kingfisher 1</li>
                        <li>Kingfisher 1</li>
                        <li>Kingfisher 1</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>Top Wine Stores</h4>
                    <ul>
                        <li>Madhuloka</li>
                        <li>Store Name</li>
                        <li>Store Name</li>
                        <li>Store Name</li>
                        <li>Store Name</li>
                        <li>Store Name</li>
                    </ul>
                </div>
                <div class="col-12 bg-danger text-center">
                    <p>Copyright @ 2019 Trippler.com</p>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Footer;