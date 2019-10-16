import React from 'react';
import Navbar  from './Navbar'
function OrderList() {
    return(
        <React.Fragment>
           <Navbar />
            <div class="container ">
                <div class="row mt-5">
                    <div class="col text-center my-5">
                       <div class="py-4">
                        <h1 class="h3">Order List</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Customer Name</th>
                                        <th>Items</th>
                                        <th>Price</th>
                                        <th>Satus</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>1134</td>
                                        <td>Ashish Umrey</td>
                                        <td>12</td>
                                        <td> ₹1024</td>
                                        <td>Success</td>
                                        <td><button className="btn btn-primary">View Details</button></td>
                                    </tr>
                                    <tr>
                                        
                                         <td scope="row">1120</td>
                                        <td>Amit Kumar</td>
                                        <td>12</td>
                                        <td> ₹2400</td>
                                        <td>Completed</td>
                                        <td><button className="btn btn-primary">View Details</button></td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                            <nav>
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderList;