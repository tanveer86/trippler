import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Search(props) {

    let getQuery = JSON.parse(localStorage.getItem('searchQuery'));

    let showProducts = props.allProducts.products.map(eachProduct => {
        if(getQuery == eachProduct.productBrand || getQuery == eachProduct.productCategory || getQuery == eachProduct.productName)
        return(
            <div class="col-3 font-weight-bolder text-center mb-3">
                <div class="card">
                    <img src={eachProduct.productImage} class="card-img-top" alt={eachProduct.productName} title={eachProduct.productName} height="250" />
                    <div class="card-body">
                        <h5 class="card-title">{eachProduct.productName}</h5>
                        <p class="card-text text-danger">MRP Rs. {eachProduct.productMRP}</p>
                        <p class="card-text text-danger">Rs. {eachProduct.productSellingPrice}</p>
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
            <div class="container-fuild bg-light">
            <p class="pt-3 text-danger font-weight-bolder">You searched for {getQuery}</p>
                <div class="row mt-3">
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

export default connect(mapStateToProps)(Search)