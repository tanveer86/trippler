import React from 'react';
import Navbar from './Navbar';
import styles from '../style.module.css'

function BiddingDetail() {
    return (
        <React.Fragment>
                <Navbar />
            <div className={styles.marginTop}>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title text-center font-weight-bold">Order details</h4>
                                <p class="card-text font-weight-bold">Bid Id: 12343</p>
                                <p class="card-text font-weight-bold">Order Placed at MM:HH DD/MM/YYYY</p>
                                <p class="card-text font-weight-bold">MRP Price:₹ XYZ</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title text-center font-weight-bold">Delivery details</h4>
                                <p class="card-text font-weight-bold">Customer Name: ABC XYZ</p>
                                <p class="card-text font-weight-bold">Phone No.: 9875345508</p>
                                <p class="card-text font-weight-bold">MASAI School,1st Floor, BHIVE Workspace,Kormanagla, Bengaluru, Karnataka,PIN-560029</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-3 ml-1">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="float-left font-weight-bold offset-1">Product Details</p>
                        <p class="float-left font-weight-bold offset-4">Quantity</p>
                        <p class="float-left font-weight-bold offset-4">Price</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-3 ml-1">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-left ml-4" >
                                    <img style={{ width: "100px", height: "140px" }} src="http://www.madhuloka.com/images/data/BLENDERS%20PRIDE%20WHISKY.JPG" class="card-img" alt="..." />
                                </div>
                                <div class="float-left mt-4 ml-5">
                                    <p class="card-text">Product Name</p>
                                    <p class="card-text">Brand: Kingfisher</p>
                                    <p class="card-text">Category:Beer </p>
                                </div>
                                <p class="float-left font-weight-bold offset-4 mt-5">X</p>
                                <p class="float-left font-weight-bold offset-4 mt-5">₹ 999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-3 ml-1">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-left ml-4" >
                                    <img style={{ width: "100px", height: "140px" }} src="http://www.madhuloka.com/images/data/BLENDERS%20PRIDE%20WHISKY.JPG" class="card-img" alt="..." />
                                </div>
                                <div class="float-left mt-4 ml-5">
                                    <p class="card-text">Product Name</p>
                                    <p class="card-text">Brand: Kingfisher</p>
                                    <p class="card-text">Category:Beer </p>
                                </div>
                                <p class="float-left font-weight-bold offset-4 mt-5">Y</p>
                                <p class="float-left font-weight-bold offset-4 mt-5">₹ 500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="offset-5 font-weight-bold text-success">BID STATUS</h2>
            <div class="offset-2">
            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">   
                                <div>
                                   <div>
                                   Time Remaining:
                                   <span class="text-success">MM:SS</span>
                                   </div> 
                                   <h5 class="text-center font-weight-bold text-danger">Current Least bid by Vendor 1 $ 400</h5> 
                                   <h5 class="text-center">Enter Your Bid Amount</h5>
                                   <input class="w-50 mb-3 offset-3 text-center" placeholder="Your Bid Amount"/><br></br>
                                   <button class="btn btn-primary w-50 offset-3">BID NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div>
            
        </div>
        </React.Fragment>
    )
}

export default BiddingDetail;