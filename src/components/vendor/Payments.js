import React from 'react';
import Navbar  from './Navbar'

function Payments() {
    return(
        <React.Fragment>
            <Navbar />
            <div class="container ">
                <div class="row mt-5">
                    <div class="col text-center my-5">
                       <div class="py-4">
                        <h1 class="h3">Payments</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Payment Id</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Satus</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1134</td>
                                        <td>15-6-2019</td>
                                        <td> ₹1024</td>
                                        <td><button class="btn btn-primary">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>1129</td>
                                        <td>16-6-2019</td>
                                        <td> ₹102</td>
                                        <td><button class="btn btn-primary">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>1154</td>
                                        <td>19-6-2019</td>
                                        <td> ₹2400</td>
                                        <td><button class="btn btn-primary">View Details</button></td>
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

export default Payments;