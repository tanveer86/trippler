import React from 'react';
import {Link} from 'react-router-dom';

function Intro(){
    return(
        <React.Fragment>
            <div class="container-fuild">
                <div class="row text-center mt-5">
                    <div class="col-12 mb-5">
                    <h2 class="text-center mb-4 font-weight-bolder">Now Compare and Buy Wine at Lowest Price From Local Bars Near You</h2>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature2-b342ae46dfef9f0813407befb027f29c.png" width="100"/>
                        <h3 class="mt-3 text-danger font-weight-bolder">Delivery in 60 Minutes</h3>
                        <p class="font-weight-bolder">The quickest way to get anything delivered.</p>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature1-e3595b62d57b34e38a5f4f9f4eb42c8e.png" width="100" />
                        <h3 class="mt-3 text-danger font-weight-bolder">No Minimum Order</h3>
                        <p class="font-weight-bolder">Anything delivered without minimum order value.</p>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature4-c7bddb4a62a155388d9fa6634bb0828c.png" width="100" />
                        <h3 class="mt-3 text-danger font-weight-bolder">Free Delivery</h3>
                        <p class="font-weight-bolder">All the orders at Trippler will be delivered for free.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Intro;