import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function RelatedProducts(props) {
    // console.log(props.allProducts.products)

    let showProducts = props.allProducts.products.map((eachProduct, index) => {
        if(index<4)
        return(
            <div class="col-3 font-weight-bolder p-2 bg-white">
                <img src={eachProduct.productImage} height="200"/>
                <h5>{eachProduct.productName}</h5>
                <p>MRP Rs. {eachProduct.productMRP}</p>
                <p>Selling Rs. {eachProduct.productSellingPrice}</p>
                <Link to={eachProduct.productName} class="btn btn-danger font-weight-bolder">View Detail</Link>
            </div>
        )
    })

    return(
        <React.Fragment>
            <div class="container-fulid mt-3">
                <div class="row">
                    <div class="col-12 bg-danger text-center text-white font-weight-bolder">
                        <p class="pt-3">PEOPLE WHO BOUGHT THIS ALSO BOUGHT</p>
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

export default connect(mapStateToProps)(RelatedProducts)