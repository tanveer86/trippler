import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import RelatedProducts from '../layout/RelatedProducts';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../../redux/actions/AllActions';

var discountArr=[];
class ProductDetail extends React.Component{
    handleClick = (productId)=>{
    this.props.addToCart(productId); 
    }

render(){
    let showProduct = this.props.productData.products.find(product => product.productName == this.props.match.params.productName);
    console.log(showProduct.productVendor[1].discountPercentage)
    for(var i=0;i<showProduct.productVendor.length;i++)
    {
       var sellingPrice=Number(showProduct.productMRP)-Number(showProduct.productVendor[i].discountPercentage)*Number(showProduct.productMRP)*0.01;
       discountArr.push(Math.floor(sellingPrice))   
    }
    
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
                            <img src={showProduct.productImage} class="card-img" alt={showProduct.productName} title={showProduct.productName} height="350"/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{showProduct.productName} {showProduct.productVolume}</h5>
                                <p class="card-text text-capitalize">Brand: {showProduct.productBrand}</p>
                                <p class="card-text text-capitalize">Type: {showProduct.productCategory}</p>
                                <del><p class="card-text text-danger" style={{textDecoration: 'linethrough'}}>MRP: Rs. {showProduct.productMRP}</p></del>
                                <p class="card-text text-danger font-weight-bolder mt-2">Selling Price: Rs. {showProduct.productSellingPrice}</p>
                                <p class="card-text">{showProduct.productDescription}</p>
                            </div>
                            <button class="btn btn-danger mr-4 font-weight-bolder btn-lg" onClick={()=>{this.handleClick(showProduct.productId)}}>Add to Cart</button>
                            <button type="button" class="btn btn-success mr-4 font-weight-bolder btn-lg" data-toggle="tooltip" data-placement="top" title="COMMING SOON">Bid Now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h2>Also Available at {this.props.vendorData.vendors.length} more sellers</h2>
                    </div>
                </div>
            </div>
            <div class="container-fuild">
                <div class="row">
                    <div class="col-12 mt-3 pt-4 text-center border border-danger">
                        {this.props.vendorData.vendors.map((eachVendor,index) => {
                            return(
                                <div class="row">
                                    <div class="col-3 mt-2">
                                        <img src={eachVendor.vendorLogo} width="150" height="90"/>
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
                                            <li>Selling Price: Rs. {discountArr[index]}</li>
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
}
const mapStateToProps = (state) => {
    return {
        productData: state.products,
        vendorData: state.vendors
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (productId)=>{dispatch(addToCart(productId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)