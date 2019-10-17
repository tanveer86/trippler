import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';

function OrderDetail() {
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="contianer mt-5">
                <div class="row">
                    <div class="col-3 text-center">
                        <button class="btn btn-danger">Order Id: 98646</button>
                    </div>
                    <div class="col-6">

                    </div>
                    <div class="col-3 text-center">
                        <button class="btn btn-success">Completed</button>
                    </div>
                </div>
            </div>
            <div class="container border border-dark mt-5 p-3">
                <div class="row">
                    <div class="col-6">
                        <h2>Delivery Details</h2>
                        <p>Your Name: Tanveer</p>
                        <p>Your Address:</p>
                        <p>Masai, Bhive, Kormangala, Bangalore - 5600011</p>
                        <p>Phone: 9845478531</p>
                    </div>
                    <div class="col-6 text-right">
                        <h2>Vendor Details</h2>
                        <p>Vendor Name: Madhuloka</p>
                        <p>Vendor Address:</p>
                        <p>Madhuloka, BTM Layout, Banglaore - 560095</p>
                        <p>Phone: 984547853</p>
                    </div>
                    <div class="col-12 text-center text-danger">
                    <h2>Items in Your Order</h2>
                    </div>
                    <div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4 mt-4">
                                <img src="https://i.ibb.co/jTp0gvS/beefr.png" class="card-img" alt="..." height="150" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Product Name 200 Ml</h5>
                                    <p class="card-text">MRP: Rs. 650 | Price: Rs. 450</p>
                                    <p class="card-text">Quaninty: 2</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4 mt-4">
                                <img src="https://i.ibb.co/jTp0gvS/beefr.png" class="card-img" alt="..." height="150" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Product Name 200 Ml</h5>
                                    <p class="card-text">MRP: Rs. 650 | Price: Rs. 450</p>
                                    <p class="card-text">Quaninty: 2</p>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <h3>Total: Rs. 600</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default OrderDetail;