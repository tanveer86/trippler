import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import RelatedProducts from '../layout/RelatedProducts';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


function ProductDetail(props) {
   console.log(props.match.url)

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
                                <p class="card-text text-capitalize">Brand: {showProduct.productBrand}</p>
                                <p class="card-text text-capitalize">Type: {showProduct.productCategory}</p>
                                <del><p class="card-text text-danger" style={{textDecoration: 'linethrough'}}>MRP: Rs. {showProduct.productMRP}</p></del>
                                <p class="card-text text-danger font-weight-bolder mt-2">Selling Price: Rs. {showProduct.productSellingPrice}</p>
                                <p class="card-text">{showProduct.productDescription}</p>
                            </div>
                            <button class="btn btn-danger mr-4 font-weight-bolder">Add to Cart</button>
                            <button class="btn btn-success mr-4 font-weight-bolder">Bid Now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h2>Also Available at {props.vendorData.vendors.length} more sellers</h2>
                    </div>
                </div>
            </div>
            <div class="container-fuild">
                <div class="row">
                    <div class="col-12 mt-3 pt-4 text-center border border-danger">
                        {props.vendorData.vendors.map(eachVendor => {
                            return(
                                <div class="row">
                                    <div class="col-3 mt-2">
                                        <img src={eachVendor.vendorLogo} width="150"/>
                                    </div>
                                    <div class="col-3">
                                        <ul style={{listStyle:'none'}}>
                                            <li class="text-danger font-weight-bolder">SELLER DETAILS</li>
                                            <li>{eachVendor.vendorName}</li>
                                            <li>{eachVendor.vendorArea}</li>
                                        </ul>
                                    </div>
                                    <div class="col-3">
                                        <ul style={{listStyle:'none'}}>
                                            <li class="text-danger font-weight-bolder">PRODUCT DETAILS</li>
                                            <li>{showProduct.productName}</li>
                                            <li>Selling Price: Rs. {showProduct.productSellingPrice}</li>
                                        </ul>
                                    </div>
                                    <div class="col-3 mt-2">
                                        <button class="btn btn-danger btn-lg font-weight-bolder">Buy Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <RelatedProducts />
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.products,
        vendorData: state.vendors
    }
}

export default connect(mapStateToProps)(ProductDetail)