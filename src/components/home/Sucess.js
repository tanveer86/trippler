import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';

function Sucess() {
    return(
        <React.Fragment>
            <TopBar/>
            <Header/>
            <Nav/>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-12 text-center mt-5">
                        <h2 class="text-success">Your Order Has Been Confirmed and It Will be Delieved Soon</h2>
                   </div>
               </div>
               <div class="row">
                   <div class="col-7 my-5">
                       <div class="card">
                           <h4 class="offset-2">
                           Order Placed for ₹ XXXX
                           </h4>
                           <p class="offset-2">
                           Your Y(Quantity) Item will be delivered by today evening
                           </p>
                       </div>
                   </div>
                   <div class="col-5 my-5">
                       <div class="card">
                           <div class="text-center">
                               <button class="btn btn-danger mb-3 mt-4 font-weight-bold">
                                GO TO MY ORDERS
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-7 my-2">
                       <div class="card">
                           <h4 class="offset-2 font-weight-bold mt-3">
                           Delivery Address
                           </h4>
                           <p class="offset-2 font-weight-bold">
                            ABC XYZ
                           </p>
                           <p class="offset-2">
                           MASAI School,1st Floor, BHIVE Workspace,Kormanagla,Bengaluru,Karnataka,PIN-560029
                           </p>
                           <p class="offset-2 mb-5">
                           Phone -765332XX88
                           </p>
                       </div>
                   </div>
                   <div class="col-5 my-2">
                       <div class="card">
                           <div class="">
                           <h4 class="offset-2 font-weight-bold mt-3 text-center">
                           Vendor Details
                           </h4>
                           <p class="offset-2 font-weight-bold">
                            Vendor Name: ABC XYZ
                           </p>
                           <p class="offset-2">
                            <span class="font-weight-bold">
                            Vendor Address:
                            </span> 
                            MASAI School,1st Floor, BHIVE Workspace,Kormanagla,Bengaluru,Karnataka,PIN-560029
                           </p>
                           <p class="offset-2 mb-4">
                           <span class="font-weight-bold">
                            Phone :
                            </span> 
                           765332XX88
                           </p>
                           </div> 
                       </div>
                   </div>
               </div>
           </div>
           <div className="container-fluid mt-3 ml-1 bg-danger">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="float-left ml-4" >
                                <img style={{ width: "100px", height: "140px" }} src="http://www.madhuloka.com/images/data/BLENDERS%20PRIDE%20WHISKY.JPG" class="card-img" alt="..." />
                            </div>
                            <div class="float-left mt-4 ml-5">
                                <p class="card-text">Product Name</p>
                                <p class="card-text">Category:Beer </p>
                                <p class="card-text">Quantity:Y</p>
                            </div>   
                            <p class="float-right font-weight-bold mr-5 mt-5">₹ 500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid mt-3 ml-1 bg-danger">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="float-left ml-4" >
                                <img style={{ width: "100px", height: "140px" }} src="http://www.madhuloka.com/images/data/BLENDERS%20PRIDE%20WHISKY.JPG" class="card-img" alt="..." />
                            </div>
                            <div class="float-left mt-4 ml-5">
                                <p class="card-text">Product Name</p>
                                <p class="card-text">Category:Beer </p>
                                <p class="card-text">Quantity:Y</p>
                            </div>   
                            <p class="float-right font-weight-bold mr-5 mt-5">₹ 500</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <h3 class="float-right mr-5 font-weight-bold">Total Price:₹ 1000 </h3>
       <Footer />
        </React.Fragment>
    )
}

export default Sucess;