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
            <div class="container-fluid mb-5">
                <div class="row">
                    <div class="col-sm-9 col-md-12 col-lg-5 offset-1">
                        <div class="card p-5 mt-5 shadow">
                            <h4 class="font-weight-bold text-center">Vendor Register</h4>
                            <div class="card-body">
                                <form>
                                    <div class="from-group row mb-2">
                                        <label for="fullName" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" required placeholder="Vendor Name" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="emailId" class="col-sm-3 col-form-label">Email Id</label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" required placeholder="Email Id" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="mobile" class="col-sm-3 col-form-label">Mobile</label>
                                        <div class="col-sm-9">
                                            <input type="Number" class="form-control" required placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="password" class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" required placeholder="Enter Password" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="area" class="col-sm-3 col-form-label">Area</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" required placeholder="Select Area" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="city" class="col-sm-3 col-form-label">City</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" required placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label for="pin" class="col-sm-3 col-form-label">PIN</label>
                                        <div class="col-sm-9">
                                            <input type="Number" class="form-control" required placeholder="Enter PIN" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-3">
                                        <label for="License" class="col-sm-3 col-form-label">License</label>
                                        <div class="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validateLicense" required />
                                            <label class="custom-file-label" for="validateLicense">Choose file...</label>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-3">
                                        <label for="gst" class="col-sm-3 col-form-label">GST</label>
                                        <div class="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validateGst" required />
                                            <label class="custom-file-label" for="validateGst">Choose file...</label>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-3">
                                        <label for="uploadLogo" class="col-sm-3 col-form-label">Upload Logo</label>
                                        <div class="col-sm-8 ml-3">
                                            <input type="file" class="custom-file-input" id="validatedLogo" required />
                                            <label class="custom-file-label" for="validatedLogo">Choose file...</label>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2 text-center mt-3">
                                        <label for="alcohalcontent" class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="button" class="btn btn-primary w-100">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9 col-md-12 col-lg-4 ml-4">
                        <div class="card p-5 mt-5 shadow">
                            <h4 class="font-weight-bold text-center">Vendor Login</h4>
                            <div class="card-body">
                                <form>
                                    <div class="from-group row mb-2">
                                        <label for="productname" class="col-sm-3 col-form-label">Email Id</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" placeholder="Enter Email address" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2 mt-3">
                                        <label for="productname" class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" placeholder="Enter Password" />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2 mt-3">
                                        <label for="alcohalcontent" class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-8">
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