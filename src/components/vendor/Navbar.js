import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="nav fixed-top  bg-dark" style={{height:"70px"}}>
        <Link className="nav-item nav-link text-white" to=""> <h1 style={{ marginLeft: "40px",fontSize: "40px",marginTop:"5px" }}><span>TRIPPLER<sub style={{fontSize:"12px"}}>for Vendor</sub></span></h1></Link>
        <Link className="nav-item nav-link text-white mt-3 offset-1" style={{ fontSize: "20px"}} to="/">Add Product</Link>
        <Link className="nav-item nav-link text-white mt-3 offset-1" style={{ fontSize: "20px" }} to="/">Order List</Link>
        <Link className="nav-item nav-link text-white mt-3 offset-1" style={{ fontSize: "20px" }} to="/">Bidding List</Link>
        <Link className="nav-item nav-link text-white mt-3 offset-1" style={{ fontSize: "20px" }} to="/">Payment List</Link>
        <Link className="nav-item nav-link text-white mt-3 offset-1" style={{ fontSize: "20px" }} to="/">LOG OUT</Link>
      </nav>
    </div>
  );
};
export default Navbar;  