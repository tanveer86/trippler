import React from 'react';

function ProductDay(){
    return(
        <React.Fragment>
            <div class="container-fuild">
                <div class="row">
                    <div class="col-12 text-center p-3">
                        <h1>Product of the Day</h1>
                    </div>
                    <div class="col-5 text-center">
                        <img src="https://dydza6t6xitx6.cloudfront.net/ci-bira91-the-ipa-240ade5342e60779.png" height="300" />
                    </div>
                    <div class="col-6 text-center">
                        <h2 class="font-weight-bolder">Bira 91 The IPA 400 Ml</h2>
                        <h4 class="text-danger font-weight-bolder" style={{textDecoration: 'line-through'}}>MRP: Rs. 1300</h4>
                        <h3 class="text-success font-weight-bolder">Selling Price: Rs. 750</h3>
                        <p>IPA stands for Indian Pale Ale, which is brewed from hoppy, pale malts & wheat. The Bira IPA smells fresh and flowery, almost like potpourri, and tastes rather fruity, which is also what you'd call a man who orders it.</p>
                        <button class="btn btn-danger font-weight-bolder">BUY THIS NOW</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDay;