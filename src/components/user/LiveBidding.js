import React from 'react';
import TopBar from '../layout/TopBar';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer'

function LiveBidding() {
    return (
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="my-2">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <h5 class="text-center text-success font-weight-bold">LIVE STATUS</h5>
                                <span class="text-right mr-5">Time Remaining : <span class="text-danger font-weight-bold">MM:SS</span></span>
                                <h2 class="text-center text-primary">Last Bidding Price : ₹ ZZZ by Vendor AAA BBB</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="offset-2 my-5 float-left">
                        <img src="https://d2jz4nqvi4omcr.cloudfront.net/Blogs/soldechile_varietal_cavernetsauvignon.jpg" height="450" width="380" class="border"></img>
                    </div>
                    <div class="float-left ml-5" style={{ marginTop: "80px" }}>
                        <h4 class="font-weight-bold ml-2 mb-4">Product Name</h4>
                        <h5 class="ml-2 mb-4">Product description</h5>
                        <h5 class="ml-2 mb-4">Volume: 375 mL</h5>
                        <h5 class="ml-2 mb-4">Manufacture date:XX/YY</h5>
                        <h5 class="ml-2 mb-4">Alcohal Centent:X% V/V</h5>
                        <h4 class="font-weight-bold ml-2 mb-4">Original MRP ₹ XXY</h4>
                        <h4 class="font-weight-bold text-danger ml-2 mb-4">Last Bidding Price: ₹ ZZZ</h4>
                        <button class="btn btn-success ml-2 w-75 mt-3 font-weight-bold">GRAB BID</button>
                    </div>
                </div>
            </div>
            <div style={{ clear: "both" }}>
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default LiveBidding;