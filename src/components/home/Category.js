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
                        <h5 class="card-title">{eachProduct.productName}</h5>
                        <p class="card-text text-danger">MRP: Rs. {eachProduct.productMRP}</p>
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
            <div class="container-fuild">
                <div class="row"> 
                    <div class="col-12">
                        <img src="http://www.supergeona.com/wp-content/uploads/2016/12/drinks-1-1300x300.jpg" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <div class="container-fuild bg-light">
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