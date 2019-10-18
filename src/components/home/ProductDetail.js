import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import BestSellingProducts from '../layout/BestSellingProducts';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';

function ProductDetail(props) {
    

    let showProduct = props.productData.products.find(product => product.productName == props.match.params.productName);
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
                            <img src={showProduct.productImage} class="card-img" alt="..." height="350"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{showProduct.productName}</h5>
                                <p class="card-text">Brand: {showProduct.productBrand}</p>
                                <p class="card-text">Type: {showProduct.productCategory}</p>
                                <p class="card-text">MRP: {showProduct.productPrice}</p>
                                <p class="card-text">Selling Price: Rs. 180</p>
                                <p class="card-text">{showProduct.productDescription}</p>
                            </div>
                            <button class="btn btn-danger mr-4">Add to Cart</button>
                            <button class="btn btn-success mr-4">Bid Now</button>
                            <button class="btn btn-dark">See 8 More Sellers</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h2>Also Available at these Sellers</h2>
                    </div>
                </div>
            </div>
            <div class="container-fuild">
                <div class="row">
                    <div class="col-6 p-3 mt-5 text-center border border-danger">
                        <div class="row">
                            <div class="col-3 mt-3">
                                <img src="https://via.placeholder.com/350x150" width="150"/>
                            </div>
                            <div class="col-6 mt-3">
                                <p>Product Name</p>
                                <p>Selling Price: Rs. 500</p>
                            </div>
                            <div class="col-3 mt-4">
                                <button class="btn btn-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 mt-5 text-center border border-danger">
                        <div class="row">
                            <div class="col-3 mt-3">
                                <img src="https://via.placeholder.com/350x150" width="150"/>
                            </div>
                            <div class="col-6 mt-3">
                                <p>Product Name</p>
                                <p>Selling Price: Rs. 500</p>
                            </div>
                            <div class="col-3 mt-4">
                                <button class="btn btn-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 text-center border border-danger">
                        <div class="row">
                            <div class="col-3 mt-3">
                                <img src="https://via.placeholder.com/350x150" width="150"/>
                            </div>
                            <div class="col-6 mt-3">
                                <p>Product Name</p>
                                <p>Selling Price: Rs. 500</p>
                            </div>
                            <div class="col-3 mt-4">
                                <button class="btn btn-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-3 text-center border border-danger">
                        <div class="row">
                            <div class="col-3 mt-3">
                                <img src="https://via.placeholder.com/350x150" width="150"/>
                            </div>
                            <div class="col-6 mt-3">
                                <p>Product Name</p>
                                <p>Selling Price: Rs. 500</p>
                            </div>
                            <div class="col-3 mt-4">
                                <button class="btn btn-danger">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BestSellingProducts />
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.products
    }
}

export default connect(mapStateToProps)(ProductDetail)