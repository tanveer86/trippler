import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
            <nav className="nav fixed-top bg-dark">
              <Link className="nav-item nav-link text-white" to=""> <h1 ><span>TRIPPLER<sub style={{ fontSize: "12px" }}>for Vendor</sub></span></h1></Link>
              <Link className="nav-item nav-link text-white mt-3 offset-1" to="/">Add Product</Link>
              <Link className="nav-item nav-link text-white mt-3 offset-1" to="/">Order List</Link>
              <Link className="nav-item nav-link text-white mt-3 offset-1" to="/">Bidding List</Link>
              <Link className="nav-item nav-link text-white mt-3 offset-1" to="/">Payment List</Link>
              <Link className="nav-item nav-link text-white mt-3 offset-1" to="/">LOG OUT</Link>
            </nav>
          </div>
        </div>
    </React.Fragment>
  );
};
export default Navbar;  