import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
function OrderList() {
    return(
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container ">
                <div class="row mt-2">
                    <div class="col text-center my-5">
                       <div class="py-4">
                        <h1 class="h3">Order List</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Items</th>
                                        <th>Date</th>
                                        <th>price</th>
                                        <th>Satus</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>1134</td>
                                        <td>12</td>
                                        <td>19-6-2019</td>
                                        <td> ₹1024</td>
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