import React from 'react';

function Intro(){
    return(
        <React.Fragment>
            <div class="container-fuild">
                <div class="row text-center mt-5">
                    <div class="col-12 mb-5">
                    <h2 class="text-center">Gum Ka Sathi RUM</h2>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature2-b342ae46dfef9f0813407befb027f29c.png" width="100"/>
                        <h2>Delivered in 60 Minutes</h2>
                        <p>The quickest way to get anything delivered.</p>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature1-e3595b62d57b34e38a5f4f9f4eb42c8e.png" width="100" />
                        <h2>No Minimum Order</h2>
                        <p>Anything delivered without minimum order value.</p>
                    </div>
                    <div class="col-4">
                        <img src="https://www.dunzo.com/_next/static/images/feature4-c7bddb4a62a155388d9fa6634bb0828c.png" width="100" />
                        <h2>Free Delivery</h2>
                        <p>All the orders placed at Trippler will be delivered for free.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Intro;