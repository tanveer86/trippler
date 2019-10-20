import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBrands from '../layout/TopBrands';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Category(props) {

    let showProducts = props.allProducts.products.map(eachProduct => {
        if(props.match.params.productCategory == eachProduct.productCategory)
        return(
            <div class="col-3 font-weight-bolder text-center mb-3">
                <div class="card">
                    <img src={eachProduct.productImage} class="card-img-top" alt={eachProduct.productName} title={eachProduct.productName} height="250" />
                    <div class="card-body">
                        <Link to={`product/${eachProduct.productName}`} class="text-dark font-weight-bolder"><h5 class="card-title">{eachProduct.productName}</h5></Link>
                        <p class="card-text text-danger">Buy at Rs. {eachProduct.productSellingPrice}</p>
                        <Link to={`product/${eachProduct.productName}`} class="btn btn-danger font-weight-bolder">View Detail</Link>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container-fuild">
                <div class="row"> 
                    <div class="col-12">
                        <img src="https://i.ibb.co/HXVMgnD/wine.jpg" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <div class="container-fuild bg-light p-3">
                <div class="row">
                        {showProducts}
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        allProducts: state.products
    }
} 

export default connect(mapStateToProps)(Category)