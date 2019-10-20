import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function BestSellingProducts(props) {
    // console.log(props.allProducts.products)

    let showProducts = props.allProducts.products.map((eachProduct, index) => {
        if(index<4)
        return(
            <div class="col-3 font-weight-bolder p-2 bg-white">
                <img src={eachProduct.productImage} height="200"/>
                <Link class="text-dark font-weight-bolder" to={`product/${eachProduct.productName}`}><h5>{eachProduct.productName}</h5></Link>
                <p class="text-danger font-weight-bolder">Buy at Rs. {eachProduct.productSellingPrice}</p>
                <Link to={`product/${eachProduct.productName}`} class="btn btn-danger font-weight-bolder">View Detail</Link>
            </div>
        )
    })

    return(
        <React.Fragment>
            <div class="container-fulid mt-3">
                <div class="row">
                    <div class="col-12 bg-danger text-center text-white font-weight-bolder">
                        <p class="pt-3">BEST SELLING PRODUCTS AT TRIPPLER</p>
                    </div>
                </div>
            </div>
            <div class="container-fuild">
                <div class="row text-center bg-light">
                    
                        {showProducts}
                    
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

export default connect(mapStateToProps)(BestSellingProducts)