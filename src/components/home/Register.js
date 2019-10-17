import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';

function Register() {
    return (
        <React.Fragment>
            <TopBar />
            <Header />
            <Nav />
            <div class="container-fluid mb-5">
                <div class="col-sm-9 col-md-12 col-lg-4 mx-auto ">
                    <div class="card p-5 mt-5 shadow">
                        <h5 class="font-weight-bold text-center">User Register</h5>
                        <div class="card-body">
                            <form>
                                <div class="from-group row mb-2">
                                    <label for="fullName" class="col-sm-3 col-form-label">Full Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" required placeholder="Full Name" />
                                    </div>
                                </div>
                                <div class="from-group row mb-2">
                                    <label for="dateOfBirth" class="col-sm-3 col-form-label">Date of Birth</label>
                                    <div class="col-sm-9">
                                        <input type="date" class="form-control" required placeholder="Alcohal Content" />
                                    </div>
                                </div>
                                <div class="from-group row mb-2">
                                    <label for="emailId" class="col-sm-3 col-form-label">Email Id</label>
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control"  placeholder="Email Id" required/>
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
                                    <label for="aadhar" class="col-sm-3 col-form-label">Aadhar</label>
                                    <div class="col-sm-9">
                                        <input type="Number" class="form-control" required placeholder="Aadhar Number" />
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
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Register;