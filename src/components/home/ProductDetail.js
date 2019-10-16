import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';

function ProductDetail() {
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container">
                <div class="row">
                    <div class="card col-12 mt-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="https://cheers.com.np/uploads/products/71663693367143172792803015998122162934656.png" class="card-img" alt="..." height="350"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Kingfisher 500 Ml</h5>
                                <p class="card-text">Brand: Kingfisher</p>
                                <p class="card-text">Type: Beer</p>
                                <p class="card-text">MRP: Rs. 800</p>
                                <p class="card-text">Selling Price: Rs. 400</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <button class="btn btn-danger mr-4">Add to Cart</button>
                            <button class="btn btn-success mr-4">Bid Now</button>
                            <button class="btn btn-dark">See 8 More Sellers</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetail;