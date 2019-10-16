import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

function VendorRegistration() {
    return (
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-sm-9 col-md-12 col-lg-5 offset-1">
                        <div className="card p-5 mt-5 shadow">
                            <h4 className="font-weight-bold text-center">Vendor Register</h4>
                            <div className="card-body">
                                <form>
                                    <div className="from-group row mb-2">
                                        <label for="fullName" className="col-sm-3 col-form-label">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" required placeholder="Vendor Name" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="emailId" className="col-sm-3 col-form-label">Email Id</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control" required placeholder="Email Id" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="mobile" className="col-sm-3 col-form-label">Mobile</label>
                                        <div className="col-sm-9">
                                            <input type="Number" className="form-control" required placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="password" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" required placeholder="Enter Password" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="area" className="col-sm-3 col-form-label">Area</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" required placeholder="Select Area" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="city" className="col-sm-3 col-form-label">City</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" required placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2">
                                        <label for="pin" className="col-sm-3 col-form-label">PIN</label>
                                        <div className="col-sm-9">
                                            <input type="Number" className="form-control" required placeholder="Enter PIN" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-3">
                                        <label for="License" className="col-sm-3 col-form-label">License</label>
                                        <div className="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validateLicense" required />
                                            <label class="custom-file-label" for="validateLicense">Choose file...</label>
                                        </div>
                                    </div>
                                    <div className="from-group row mb-3">
                                        <label for="gst" className="col-sm-3 col-form-label">GST</label>
                                        <div className="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validateGst" required />
                                            <label class="custom-file-label" for="validateGst">Choose file...</label>
                                        </div>
                                    </div>
                                    <div className="from-group row mb-3">
                                        <label for="uploadLogo" className="col-sm-3 col-form-label">Upload Logo</label>
                                        <div className="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validatedLogo" required />
                                            <label class="custom-file-label" for="validatedLogo">Choose file...</label>
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2 text-center mt-3">
                                        <label for="alcohalcontent" className="col-sm-3 col-form-label"></label>
                                        <div className="col-sm-9">
                                            <button type="button" class="btn btn-primary w-100">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-12 col-lg-4 ml-4">
                        <div className="card p-5 mt-5 shadow">
                            <h4 className="font-weight-bold text-center">Vendor Login</h4>
                            <div className="card-body">
                                <form>
                                    <div className="from-group row mb-2">
                                        <label for="productname" className="col-sm-3 col-form-label">Email Id</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Email address" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2 mt-3">
                                        <label for="productname" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" placeholder="Enter Password" />
                                        </div>
                                    </div>
                                    <div className="from-group row mb-2 mt-3">
                                        <label for="alcohalcontent" className="col-sm-3 col-form-label"></label>
                                        <div className="col-sm-8">
                                            <button type="button" class="btn btn-primary w-100">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default VendorRegistration;