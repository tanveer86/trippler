import React from 'react';
import Header from '../layout/Header';
import Nav from '../layout/Nav';
import TopBar from '../layout/TopBar';
import Footer from '../layout/Footer';
import {connect} from 'react-redux';

class VendorRegistration extends React.Component {
    constructor(){
        super();
        this.state = {
            vendorId: '',
            vendorName: '',
            vendorEmail: '',
            vendorMobile: '',
            vendorPassword: '',
            vendorArea: '',
            vendorCity: '',
            vendorPIN: '',
            vendorLicense: '',
            vendorGST: '',
            vendorLogo: '',
            vendorStatus: true,
        }
    }

    inputChange = (userInput) => {
        this.setState({[userInput.target.name]: userInput.target.value});
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        this.setState({vendorId:'',vendorName:'',vendorEmail:'',vendorMobile:'',vendorPassword:'',vendorArea:'',vendorCity:'',vendorPIN:'',vendorLicense:'',vendorGST:'',vendorLogo:''})
        console.log(this.state)
    }

    render(){
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
                                    <form onSubmit={this.inputSubmit}>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorName} name="vendorName" onChange={this.inputChange} class="form-control" required placeholder="Vendor Name" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Email Id</label>
                                            <div class="col-sm-9">
                                                <input type="email" value={this.state.vendorEmail} name="vendorEmail" onChange={this.inputChange} class="form-control" required placeholder="Email Id" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Mobile</label>
                                            <div class="col-sm-9">
                                                <input type="Number" value={this.state.vendorMobile} name="vendorMobile" onChange={this.inputChange} class="form-control" required placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-9">
                                                <input type="password" value={this.state.vendorPassword} name="vendorPassword" onChange={this.inputChange} class="form-control" required placeholder="Enter Password" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">Area</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorArea} name="vendorArea" onChange={this.inputChange} class="form-control" required placeholder="Select Area" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">City</label>
                                            <div class="col-sm-9">
                                                <input type="text" value={this.state.vendorCity} name="vendorCity" onChange={this.inputChange} class="form-control" required placeholder="Enter City" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-2">
                                            <label class="col-sm-3 col-form-label">PIN</label>
                                            <div class="col-sm-9">
                                                <input type="Number" value={this.state.vendorPIN} name="vendorPIN" onChange={this.inputChange} class="form-control" required placeholder="Enter PIN" />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-3">
                                            <label class="col-sm-3 col-form-label">License</label>
                                            <div class="col-sm-8 ml-3">
                                                <input type="text" value={this.state.vendorLicense} name="vendorLicense" onChange={this.inputChange} class="form-control"  required />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-3">
                                            <label class="col-sm-3 col-form-label">GST</label>
                                            <div class="col-sm-8 ml-3">
                                            <input type="text" vlaue={this.state.vendorGST} name="vendorGST" onChange={this.inputChange} class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="from-group row mb-3">
                                            <label class="col-sm-3 col-form-label">Upload Logo</label>
                                            <div class="col-sm-8 ml-3">
                                                <input type="text" value={this.state.vendorLogo} name="vendorLogo" onChange={this.inputChange} class="form-control" required />
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
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(VendorRegistration)