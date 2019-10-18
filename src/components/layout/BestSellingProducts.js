import React from 'react';
import {connect} from 'react-redux';

function BestSellingProducts(props) {
    // console.log(props.allProducts.products)

    let showProducts = props.allProducts.products.map((eachProduct, index) => {
        if(index<4)
        return(
            <div class="col-3 font-weight-bolder">
                <div class="card">
                    <img src={eachProduct.productImage}  class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{eachProduct.productName}</h5>
                        <p class="card-text text-danger">Rs. {eachProduct.productPrice}</p>
                        <button class="btn btn-danger font-weight-bolder">View Detail</button>
                    </div>
                </div>
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
                <div class="row text-center mt-3">
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