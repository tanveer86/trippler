import React from 'react';
import Navbar from './Navbar';
import styles from '../style.module.css'

function OrderDetail() {
    return(
        <React.Fragment>
        <Navbar />
    <div className={styles.marginTop}>
    <div class="container-fluid offset-1">
        <div class="row">
            <div class="col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-center font-weight-bold">Order details</h4>
                        <p class="card-text">Order Id: 12343</p>
                        <p class="card-text">Order Placed at MM:HH DD/MM/YYYY</p>
                        <p class="card-text">MRP Price:₹ XYZ</p>
                        <p class="card-text">Delivery Charges:<span class="text-success font-weight-bold">Free</span> </p>
                        <p class="card-text">Order Type: <span class="font-weight-bold">Direct Purchase</span></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title text-center font-weight-bold">Delivery details</h4>
                        <p class="card-text"><span class="font-weight-bold">Customer Name:</span> ABC XYZ</p>
                        <p class="card-text"><span class="font-weight-bold">Phone No.</span>: 9875345508</p>
                        <p class="card-text"><span class="font-weight-bold">Address:</span> MASAI School,1st Floor, BHIVE Workspace</p>
                        <p class="card-text"><span class="font-weight-bold">Area:</span> Kormanagla</p>
                        <p class="card-text"><span class="font-weight-bold">City:</span>Bengaluru , Karnataka,PIN-560029</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="col-10" ></hr>
    <div className="container-fluid mt-5 offset-1">
        <div class="row">
            <div class="col-lg-10">
                <p class="float-left font-weight-bold offset-1">Product Details</p>
                <p class="float-left font-weight-bold offset-4">Quantity</p>
                <p class="float-left font-weight-bold offset-4">Price</p>
            </div>
        </div>
    </div>
    <hr class="col-10" ></hr>
    <div className="container-fluid mt-3 offset-1">
        <div class="row">
            <div class="col-lg-10">
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

    <div className="container-fluid mt-3 offset-1">
        <div class="row">
            <div class="col-lg-10">
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
    <div className="container-fluid mt-3 offset-1">
        <div class="row">
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-body">
                       <h4 class="float-right mr-5 font-weight-bold">Total Price: ₹<span>XXYY</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-3 offset-1">
        <div class="row">
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-body text-center">
                       <h4 class="font-weight-bold">ORDER STATUS</h4>
                       <h5 class="text-success">Kindly, deliever the product as soon as possible</h5>
                       <button class="btn btn-danger text-center font-weight-bold">DELIVER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</React.Fragment>
    )
}

export default OrderDetail;