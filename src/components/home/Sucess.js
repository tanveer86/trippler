import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Sucess(props) {
    
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));

    let showOrderDetail = props.orderDetails.orders[props.orderDetails.orders.length-1]

    console.log(showOrderDetail.orderProductDetails)
    
    return(
        <React.Fragment>
            <TopBar/>
            <Header/>
            <Nav/>
            <div class="container">
                <div class="row mt-5 p-3 bg-light">
                    <div class="col-12 text-center text-success mb-3 mt-4">
                        <h2>Your Order has been Confirmed and will be Delivered Soon</h2>
                    </div>
                    <div class="col-6 bg-white p-2 text-center">
                        <h2>Your Order Number: {showOrderDetail.orderId}</h2>
                        <p>Your Order Will Be Delivered in 60 Minutes</p>
                    </div>
                    <div class="col-6 text-right bg-white p-2 text-center">
                        <h2>See All Your Orders</h2>
                        <Link to="#" class="btn btn-danger">My All Orders</Link>
                    </div>
                    <div class="col-6 bg-white p-2 text-center mt-3">
                        <h2>Customer Details</h2>
                        <p>Full Name: {userLogin.userName}</p>
                        <p>Mobile Number: {userLogin.userMobile}</p>
                        <p>Full Address: {showOrderDetail.orderAddress},{showOrderDetail.orderCity},{showOrderDetail.orderPincode}</p>
                    </div>
                    <div class="col-6 bg-white p-2 text-center mt-3">
                        <h2>Vendor Details</h2>
                        <p>Full Name: </p>
                        <p>Mobile Number: </p>
                        <p>Full Address: </p>
                    </div>
                    <div class="col-12 text-center mt-3">
                        <h2>All Products in Your Order</h2>
                    </div>
                    {showOrderDetail.orderProductDetails.map(eachProduct => {
                        return (
                            <div class="col-12">
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-4">
                                    <img src={eachProduct.productImage} class="card-img" height="180" />
                                    </div>
                                    <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{eachProduct.productName}</h5>
                                        <p class="card-text">Quantity: {eachProduct.quantity}</p>
                                        <p class="card-text">MRP: {eachProduct.productMRP}</p>
                                        <p class="card-text">Rs. {eachProduct.productSellingPrice}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })}

                    <div class="col-12 text-center text-danger">
                        <h2>Pay Rs. {showOrderDetail.orderTotalPrice} at the time of Delivery</h2>
                    </div>
  
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        orderDetails: state.orders
    }
}

export default connect(mapStateToProps)(Sucess)