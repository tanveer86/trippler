import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            userId: '',
            userName: '',
            userDOB: '',
            userEmail: '',
            userMobile: '',
            userPassword: '',
            userAadhar: '',
            userStatus: true,
            userOrderHistory: '',
        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]:userInput.target.value})
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        console.log(this.state)
    }

    render(){
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
                                <form onSubmit={this.inputSubmit}>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Full Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" value={this.state.userName} name="userName" class="form-control" required placeholder="Full Name" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Date of Birth</label>
                                        <div class="col-sm-9">
                                            <input type="date" value={this.state.userDOB} name="userDOB" class="form-control" required placeholder="Alcohal Content" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Email Id</label>
                                        <div class="col-sm-9">
                                            <input type="email" value={this.state.userEmail} name="userEmail" class="form-control"  placeholder="Email Id" required onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Mobile</label>
                                        <div class="col-sm-9">
                                            <input type="Number" value={this.state.userMobile} name="userMobile" class="form-control" required placeholder="Mobile Number" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" value={this.state.userPassword} name="userPassword" class="form-control" required placeholder="Enter Password" onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2">
                                        <label class="col-sm-3 col-form-label">Aadhar</label>
                                        <div class="col-sm-9">
                                            <input type="Number" value={this.state.userAadhar} name="userAadhar" class="form-control" required placeholder="Aadhar Number" onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div class="from-group row mb-2 text-center mt-3">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-primary w-100">Register Now</button>
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
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(Register)