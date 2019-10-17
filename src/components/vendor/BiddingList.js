import React from 'react';
import Navbar  from './Navbar'

function BiddingList() {
    return(
        <React.Fragment>
           <Navbar />
            <div class="container">
                <div class="row mt-5">
                    <div class="col text-center mt-5">
                       <div class="py-4">
                        <h1 class="h3">Available For Bidding</h1>
                            <table class="table">
                                <thead>
                                    <tr> 
                                        <th>Serial No</th>
                                        <th>Bidding Id</th>
                                        <th>Customer Name</th>
                                        <th>Items</th>
                                        <th>MRP</th>
                                        <th>Least Bid</th>
                                        <th>Status</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1134</td>
                                        <td>Ashish Umrey</td>
                                        <td>12</td>
                                        <td> ₹1000</td>
                                        <td> ₹800</td>
                                        <td>Available</td>
                                        <td><button class="btn btn-primary">Start Bidding</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>1354</td>
                                        <td>Amit Kumar</td>
                                        <td>5</td>
                                        <td> ₹470</td>
                                        <td> ₹450</td>
                                        <td>Closed</td>
                                        <td><button class="btn btn-primary">View Bidding</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>1984</td>
                                        <td>Tanveer</td>
                                        <td>2</td>
                                        <td> ₹250</td>
                                        <td> ₹450</td>
                                        <td>Won</td>
                                        <td><button class="btn btn-primary">View Bidding</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default BiddingList;