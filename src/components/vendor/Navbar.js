import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="row">
            <nav class="nav fixed-top bg-dark">
              <Link class="nav-item nav-link text-white" to="/vendor/home"> <h1 ><span>TRIPPLER<sub style={{ fontSize: "12px" }}>for Vendor</sub></span></h1></Link>
              <Link class="nav-item nav-link text-white mt-3 offset-1" to="/vendor/import-products">Import Product</Link>
              <Link class="nav-item nav-link text-white mt-3 offset-1" to="/vendor/order-list">Order List</Link>
              <Link class="nav-item nav-link text-white mt-3 offset-1" to="/vendor/bidding-list">Bidding List</Link>
              <Link class="nav-item nav-link text-white mt-3 offset-1" to="/vendor/payments">Payment List</Link>
              <Link class="nav-item nav-link text-white mt-3 offset-1" to="/">LOG OUT</Link>
            </nav>
          </div>
        </div>
    </React.Fragment>
  );
};
export default Navbar;  